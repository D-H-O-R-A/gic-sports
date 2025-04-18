
import React, { useState, useEffect } from 'react';
import { ref, onValue, remove } from 'firebase/database';
import { Link } from 'react-router-dom';
import { db } from '@/utils/firebase';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Pencil, Trash2, User, Flag, Medal, Star, Loader2 } from 'lucide-react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { useToast } from '@/components/ui/use-toast';

interface YoungTalent {
  id: string;
  name: string;
  age: number;
  country: string;
  sport: string;
  potential: number;
  description: string;
  image?: string;
}

const AdminYoungTalents = () => {
  const [talents, setTalents] = useState<YoungTalent[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const talentsRef = ref(db, 'youngTalents');
    
    const unsubscribe = onValue(talentsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const talentsArray = Object.entries(data).map(([id, item]: [string, any]) => ({
          id,
          ...item
        }));
        setTalents(talentsArray);
      } else {
        setTalents([]);
      }
      setLoading(false);
    }, (error) => {
      console.error('Error fetching young talents:', error);
      toast({
        title: "Error",
        description: "Failed to load young talents",
        variant: "destructive",
      });
      setLoading(false);
    });
    
    return () => unsubscribe();
  }, [toast]);

  const handleDelete = async (id: string) => {
    try {
      await remove(ref(db, `youngTalents/${id}`));
      toast({
        title: "Success",
        description: "Young talent deleted successfully",
      });
    } catch (error) {
      console.error('Error deleting young talent:', error);
      toast({
        title: "Error",
        description: "Failed to delete young talent",
        variant: "destructive",
      });
    }
  };

  const renderPotentialStars = (potential: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star 
          key={i} 
          className={`h-4 w-4 ${i < potential ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
        />
      );
    }
    return stars;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 text-blue-500 animate-spin" />
        <span className="ml-2 text-white">Loading young talents...</span>
      </div>
    );
  }

  if (talents.length === 0) {
    return (
      <Card className="bg-gray-800 border-gray-700">
        <CardContent className="pt-6 text-center">
          <User className="h-12 w-12 text-gray-500 mx-auto mb-4" />
          <p className="text-gray-400">No young talents found</p>
          <p className="text-gray-500 text-sm mt-2">Add your first young talent profile</p>
          <Link to="/admin/young-talents/new" className="mt-4 inline-block">
            <Button className="bg-blue-600 hover:bg-blue-700 mt-4">Add Young Talent</Button>
          </Link>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {talents.map((talent) => (
        <Card key={talent.id} className="bg-gray-800 border-gray-700 overflow-hidden">
          <div className="h-48 bg-gradient-to-tr from-purple-900/30 to-blue-900/30 relative">
            {talent.image ? (
              <img 
                src={talent.image} 
                alt={talent.name} 
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
              {talent.name} ({talent.age})
            </CardTitle>
          </CardHeader>
          
          <CardContent className="text-gray-400 pb-2 space-y-2">
            <div className="flex items-center text-sm">
              <Flag className="w-4 h-4 mr-2" />
              <span>{talent.country}</span>
            </div>
            <div className="flex items-center text-sm">
              <Medal className="w-4 h-4 mr-2" />
              <span>{talent.sport}</span>
            </div>
            <div className="flex items-center text-sm">
              <span className="mr-2">Potential:</span>
              <div className="flex">
                {renderPotentialStars(talent.potential)}
              </div>
            </div>
            <p className="line-clamp-2 text-sm">{talent.description}</p>
          </CardContent>
          
          <CardFooter className="flex justify-between border-t border-gray-700 pt-3">
            <div className="flex space-x-2">
              <Link to={`/admin/young-talents/edit/${talent.id}`}>
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
                      This action cannot be undone. This will permanently delete this young talent.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="bg-gray-700 text-white hover:bg-gray-600">Cancel</AlertDialogCancel>
                    <AlertDialogAction 
                      className="bg-red-600 hover:bg-red-700"
                      onClick={() => handleDelete(talent.id)}
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

export default AdminYoungTalents;
