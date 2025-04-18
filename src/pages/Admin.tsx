
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LogOut, Home, User, Newspaper, Trophy, Eye, Plus } from 'lucide-react';
import { auth } from '@/utils/firebase';
import { updateMetadata } from '@/utils/metadataUtils';
import AdminNews from '@/components/admin/AdminNews';
import AdminAthletes from '@/components/admin/AdminAthletes';
import AdminYoungTalents from '@/components/admin/AdminYoungTalents';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('news');
  const navigate = useNavigate();

  useEffect(() => {
    updateMetadata('Admin Dashboard', 'GIC Sports admin dashboard to manage content');
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/admin/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 py-4 px-6 flex justify-between items-center shadow-md">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            GIC Sports Admin
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/">
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
              <Home className="h-4 w-4 mr-2" />
              View Site
            </Button>
          </Link>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-gray-300 hover:text-white"
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <div className="container mx-auto p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <div className="flex justify-between items-center mb-6">
            <TabsList className="bg-gray-800">
              <TabsTrigger value="news" className="data-[state=active]:bg-blue-600">
                <Newspaper className="h-4 w-4 mr-2" />
                News
              </TabsTrigger>
              <TabsTrigger value="athletes" className="data-[state=active]:bg-blue-600">
                <Trophy className="h-4 w-4 mr-2" />
                Athletes
              </TabsTrigger>
              <TabsTrigger value="young-talents" className="data-[state=active]:bg-blue-600">
                <User className="h-4 w-4 mr-2" />
                Young Talents
              </TabsTrigger>
            </TabsList>

            {activeTab === 'news' && (
              <Link to="/admin/news/new">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="h-4 w-4 mr-2" />
                  New Article
                </Button>
              </Link>
            )}
            
            {activeTab === 'athletes' && (
              <Link to="/admin/athletes/new">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="h-4 w-4 mr-2" />
                  New Athlete
                </Button>
              </Link>
            )}
            
            {activeTab === 'young-talents' && (
              <Link to="/admin/young-talents/new">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="h-4 w-4 mr-2" />
                  New Talent
                </Button>
              </Link>
            )}
          </div>

          <TabsContent value="news" className="mt-0">
            <AdminNews />
          </TabsContent>
          
          <TabsContent value="athletes" className="mt-0">
            <AdminAthletes />
          </TabsContent>
          
          <TabsContent value="young-talents" className="mt-0">
            <AdminYoungTalents />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
