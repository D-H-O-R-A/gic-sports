
import React, { useState, useEffect } from 'react';
import { ref, onValue, remove } from 'firebase/database';
import { Link } from 'react-router-dom';
import { db } from '@/utils/firebase';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Pencil, Trash2, User, Flag, Award, Loader2 } from 'lucide-react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { useToast } from '@/components/ui/use-toast';

interface Athlete {
  id: string;
  name: string;
  country: string;
  sport: string;
  achievements: string;
  description: string;
  image?: string;
}

const AdminAthletes = () => {
  const [athletes, setAthletes] = useState<Athlete[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const athletesRef = ref(db, 'athletes');
    
    const unsubscribe = onValue(athletesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const athletesArray = Object.entries(data).map(([id, item]: [string, any]) => ({
          id,
          ...item
        }));
        setAthletes(athletesArray);
      } else {
        setAthletes([]);
      }
      setLoading(false);
    }, (error) => {
      console.error('Error fetching athletes:', error);
      toast({
        title: "Error",
        description: "Failed to load athletes",
        variant: "destructive",
      });
      setLoading(false);
    });
    
    return () => unsubscribe();
  }, [toast]);

  const handleDelete = async (id: string) => {
    try {
      await remove(ref(db, `athletes/${id}`));
      toast({
        title: "Success",
        description: "Athlete deleted successfully",
      });
    } catch (error) {
      console.error('Error deleting athlete:', error);
      toast({
        title: "Error",
        description: "Failed to delete athlete",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 text-blue-500 animate-spin" />
        <span className="ml-2 text-white">Loading athletes...</span>
      </div>
    );
  }

  if (athletes.length === 0) {
    return (
      <Card className="bg-gray-800 border-gray-700">
        <CardContent className="pt-6 text-center">
          <User className="h-12 w-12 text-gray-500 mx-auto mb-4" />
          <p className="text-gray-400">No athletes found</p>
          <p className="text-gray-500 text-sm mt-2">Add your first athlete profile</p>
          <Link to="/admin/athletes/new" className="mt-4 inline-block">
            <Button className="bg-blue-600 hover:bg-blue-700 mt-4">Add Athlete</Button>
          </Link>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {athletes.map((athlete) => (
        <Card key={athlete.id} className="bg-gray-800 border-gray-700 overflow-hidden">
          <div className="h-48 bg-gradient-to-tr from-blue-900/30 to-purple-900/30 relative">
            {athlete.image ? (
              <img 
                src={athlete.image} 
                alt={athlete.name} 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <User className="h-16 w-16 text-gray-600" />
              </div>
            )}
          </div>
          
          <CardHeader className="pb-2">
            <CardTitle className="text-white text-lg font-semibold">
              {athlete.name}
            </CardTitle>
          </CardHeader>
          
          <CardContent className="text-gray-400 pb-2 space-y-2">
            <div className="flex items-center text-sm">
              <Flag className="w-4 h-4 mr-2" />
              <span>{athlete.country}</span>
            </div>
            <div className="flex items-center text-sm">
              <Award className="w-4 h-4 mr-2" />
              <span>{athlete.sport}</span>
            </div>
            <p className="line-clamp-2 text-sm">{athlete.description}</p>
          </CardContent>
          
          <CardFooter className="flex justify-between border-t border-gray-700 pt-3">
            <div className="flex space-x-2">
              <Link to={`/admin/athletes/edit/${athlete.id}`}>
                <Button variant="outline" size="sm" className="text-xs border-gray-600 text-gray-300">
                  <Pencil className="h-3 w-3 mr-1" />
                  Edit
                </Button>
              </Link>
              
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline" size="sm" className="text-xs border-gray-600 text-red-400">
                    <Trash2 className="h-3 w-3 mr-1" />
                    Delete
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-gray-800 text-white border-gray-700">
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription className="text-gray-400">
                      This action cannot be undone. This will permanently delete this athlete.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="bg-gray-700 text-white hover:bg-gray-600">Cancel</AlertDialogCancel>
                    <AlertDialogAction 
                      className="bg-red-600 hover:bg-red-700"
                      onClick={() => handleDelete(athlete.id)}
                    >
                      Delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default AdminAthletes;
