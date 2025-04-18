
import React, { useState, useEffect } from 'react';
import { ref, onValue, remove } from 'firebase/database';
import { Link } from 'react-router-dom';
import { db } from '@/utils/firebase';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Pencil, Trash2, FileText, Calendar, Eye, Loader2 } from 'lucide-react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { useToast } from '@/components/ui/use-toast';

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image?: string;
}

const AdminNews = () => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const newsRef = ref(db, 'news');
    
    const unsubscribe = onValue(newsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const newsArray = Object.entries(data).map(([id, item]: [string, any]) => ({
          id,
          ...item
        }));
        setNewsItems(newsArray);
      } else {
        setNewsItems([]);
      }
      setLoading(false);
    }, (error) => {
      console.error('Error fetching news:', error);
      toast({
        title: "Error",
        description: "Failed to load news items",
        variant: "destructive",
      });
      setLoading(false);
    });
    
    return () => unsubscribe();
  }, [toast]);

  const handleDelete = async (id: string) => {
    try {
      await remove(ref(db, `news/${id}`));
      toast({
        title: "Success",
        description: "News item deleted successfully",
      });
    } catch (error) {
      console.error('Error deleting news:', error);
      toast({
        title: "Error",
        description: "Failed to delete news item",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 text-blue-500 animate-spin" />
        <span className="ml-2 text-white">Loading news items...</span>
      </div>
    );
  }

  if (newsItems.length === 0) {
    return (
      <Card className="bg-gray-800 border-gray-700">
        <CardContent className="pt-6 text-center">
          <FileText className="h-12 w-12 text-gray-500 mx-auto mb-4" />
          <p className="text-gray-400">No news items found</p>
          <p className="text-gray-500 text-sm mt-2">Create your first news article</p>
          <Link to="/admin/news/new" className="mt-4 inline-block">
            <Button className="bg-blue-600 hover:bg-blue-700 mt-4">Create News Article</Button>
          </Link>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {newsItems.map((item) => (
        <Card key={item.id} className="bg-gray-800 border-gray-700 overflow-hidden">
          <div className="h-40 bg-gradient-to-tr from-blue-900/30 to-purple-900/30 relative">
            {item.image ? (
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <FileText className="h-12 w-12 text-gray-600" />
              </div>
            )}
            <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
              {item.category}
            </div>
          </div>
          
          <CardHeader className="pb-2">
            <CardTitle className="text-white text-lg font-semibold line-clamp-2">
              {item.title}
            </CardTitle>
          </CardHeader>
          
          <CardContent className="text-gray-400 pb-2">
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{item.date}</span>
            </div>
            <p className="line-clamp-2 text-sm">{item.excerpt}</p>
          </CardContent>
          
          <CardFooter className="flex justify-between border-t border-gray-700 pt-3">
            <div className="flex space-x-2">
              <Link to={`/admin/news/edit/${item.id}`}>
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
                      This action cannot be undone. This will permanently delete this news article.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="bg-gray-700 text-white hover:bg-gray-600">Cancel</AlertDialogCancel>
                    <AlertDialogAction 
                      className="bg-red-600 hover:bg-red-700"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
            
            <Link to={`/news/${item.id}`} target="_blank">
              <Button variant="ghost" size="sm" className="text-xs text-blue-400">
                <Eye className="h-3 w-3 mr-1" />
                View
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default AdminNews;
