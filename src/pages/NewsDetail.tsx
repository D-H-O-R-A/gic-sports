
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ref, onValue } from 'firebase/database';
import { db } from '@/utils/firebase';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User, Tag, Share2, Facebook, Twitter, Linkedin, Mail, Loader2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { updateMetadata } from '@/utils/metadataUtils';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface NewsItem {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image?: string;
}

const NewsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [newsItem, setNewsItem] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedNews, setRelatedNews] = useState<NewsItem[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    if (!id) return;

    const newsRef = ref(db, `news/${id}`);
    
    const unsubscribe = onValue(newsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const item = {
          id,
          ...data
        };
        setNewsItem(item);
        updateMetadata(item.title, item.excerpt);
      } else {
        toast({
          title: "Error",
          description: "News article not found",
          variant: "destructive",
        });
      }
      setLoading(false);
    }, (error) => {
      console.error('Error fetching news:', error);
      toast({
        title: "Error",
        description: "Failed to load news article",
        variant: "destructive",
      });
      setLoading(false);
    });

    // Fetch related news
    const allNewsRef = ref(db, 'news');
    onValue(allNewsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const newsArray = Object.entries(data)
          .filter(([key, _]: [string, any]) => key !== id)
          .map(([key, value]: [string, any]) => ({
            id: key,
            ...value
          }))
          .slice(0, 3);
        setRelatedNews(newsArray);
      }
    });
    
    return () => unsubscribe();
  }, [id, toast]);

  // Fallback for demo content when using static IDs
  useEffect(() => {
    if (!loading && !newsItem && id) {
      // These are the static demo IDs from the News component
      if (['1', '2', '3'].includes(id)) {
        const demoItems = [
          {
            id: '1',
            title: "GIC Sports Completes Record-Breaking Q1 Transfer Period",
            excerpt: "With over €120 million in transfers facilitated, GIC Sports has had its most successful quarter to date, representing players across 12 countries.",
            content: `<p>GIC Sports has announced the completion of its most successful transfer period to date, with over €120 million in player transfers facilitated during Q1 2025. The company, which has rapidly expanded its athlete representation division over the past two years, now manages talent across 12 countries and multiple sports disciplines.</p>
                    <p>"Our growth in the transfer market reflects our commitment to connecting the right athletes with the right opportunities," said Sofia Hernandez, GIC Sports' Director of Talent Management. "By leveraging our global network and data-driven approach, we've been able to secure optimal outcomes for both athletes and clubs."</p>
                    <p>Notable transfers included Brazilian midfielder Lucas Mendes' €35 million move to Manchester City and American basketball star Jayden Williams' landmark switch from the Chicago Bulls to the LA Lakers.</p>
                    <p>Analysts have attributed GIC Sports' success to its innovative use of performance data and predictive analytics, which help clubs assess player suitability with greater precision. The company's blockchain-based contract system has also streamlined negotiations, reducing the average transfer completion time by 40%.</p>
                    <p>Industry experts predict that GIC Sports' market share in the transfer sector will continue to grow, with potentially even larger deals lined up for the summer window.</p>`,
            date: "April 12, 2025",
            author: "Maria Thompson",
            category: "Company Update",
            image: "business"
          },
          {
            id: '2',
            title: "New Partnership with Leading European Academy Announced",
            excerpt: "GIC Sports is proud to announce an exclusive partnership with FC Advancement, one of Europe's premier youth development institutions.",
            content: `<p>GIC Sports and FC Advancement, one of Europe's most prestigious youth academies, have announced an exclusive five-year partnership set to transform talent development across the continent.</p>
                    <p>The partnership will see GIC Sports provide its cutting-edge scouting platform and data analytics suite to FC Advancement, while gaining exclusive first rights to represent graduates from the academy's renowned program.</p>
                    <p>"This collaboration represents a perfect alignment of values and vision," said André Hoffmann, President of FC Advancement. "GIC's technological infrastructure and global reach combined with our proven development methodology will create unprecedented opportunities for young athletes."</p>
                    <p>FC Advancement has produced over 30 professional players currently competing in Europe's top five leagues, including three who have represented their national teams at senior level.</p>
                    <p>As part of the agreement, GIC Sports will establish a permanent scouting presence at the academy and develop a custom performance tracking dashboard that integrates with its wider talent management ecosystem.</p>
                    <p>"We're investing in the future of football," said Marco Rossetti, CEO of GIC Sports. "The ability to identify and nurture talent at an early stage, using objective metrics and specialized development programs, will revolutionize how elite athletes progress through the ranks."</p>
                    <p>The first initiatives under the new partnership will launch in June 2025.</p>`,
            date: "April 5, 2025",
            author: "James Wilson",
            category: "Partnerships",
            image: "partnership"
          },
          {
            id: '3',
            title: "GSC Token Sees 40% Growth Following Platform Expansion",
            excerpt: "The GSC token has experienced significant growth following the expansion of GIC's Web3 ecosystem, particularly the launch of the new scouting platform.",
            content: `<p>The GIC Sports Coin (GSC) has surged over 40% in value during the past month, following the successful launch of the company's enhanced Web3 ecosystem and integrated scouting platform.</p>
                    <p>Trading volume has increased by 325% since the platform expansion was announced, with particular interest from institutional investors specializing in sports technology and blockchain applications.</p>
                    <p>"The market is responding to real utility," explained Aisha Kapoor, GIC's Head of Tokenomics. "Unlike many tokens in the space, GSC is deeply integrated into our service offerings, providing genuine value to athletes, clubs, and fans."</p>
                    <p>The token now serves as the primary currency within GIC's scouting platform, athlete data marketplace, and fan engagement portal. Token holders gain privileged access to premium features across all three verticals.</p>
                    <p>Major exchanges have upgraded their GSC forecasts, with BitAnalyst projecting continued growth through Q3. "The sports management industry has been waiting for a credible Web3 solution," their report stated. "GIC's implementation demonstrates clear advantages over traditional systems."</p>
                    <p>GIC Sports has announced plans to further expand token utility in Q4, with new features focused on creating direct economic relationships between athletes and supporters.</p>`,
            date: "March 28, 2025",
            author: "Alex Chen",
            category: "Web3",
            image: "crypto"
          }
        ];
        
        const demoNews = demoItems.find(item => item.id === id);
        if (demoNews) {
          setNewsItem(demoNews);
          setRelatedNews(demoItems.filter(item => item.id !== id));
        }
      }
    }
  }, [id, loading, newsItem]);

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1 flex items-center justify-center bg-gray-900">
          <Loader2 className="h-8 w-8 text-blue-500 animate-spin" />
          <span className="ml-2 text-white">Loading article...</span>
        </div>
        <Footer />
      </div>
    );
  }

  if (!newsItem) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center bg-gray-900 p-6">
          <h1 className="text-3xl font-bold text-white mb-4">Article Not Found</h1>
          <p className="text-gray-400 mb-8">The news article you're looking for doesn't exist or has been removed.</p>
          <Link to="/">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Return to Home
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0A]">
      <Navbar />
      
      <main className="flex-1 pt-24">
        <article className="container mx-auto px-4 py-8">
          <Link to="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          {/* Hero Section */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">{newsItem.title}</h1>
            
            <div className="flex flex-wrap items-center text-gray-400 mb-6 gap-y-2">
              <div className="flex items-center mr-6">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{newsItem.date}</span>
              </div>
              <div className="flex items-center mr-6">
                <User className="h-4 w-4 mr-2" />
                <span>{newsItem.author}</span>
              </div>
              <div className="flex items-center">
                <Tag className="h-4 w-4 mr-2" />
                <span>{newsItem.category}</span>
              </div>
            </div>
          </div>
          
          {/* Feature Image */}
          <div className={`w-full h-64 sm:h-80 md:h-96 bg-gradient-to-tr ${
            newsItem.image === 'business' ? 'from-blue-900/30 to-purple-900/30' :
            newsItem.image === 'partnership' ? 'from-teal-900/30 to-blue-900/30' :
            'from-purple-900/30 to-pink-900/30'
          } rounded-lg overflow-hidden mb-10`}>
            {newsItem.image && typeof newsItem.image === 'string' && !['business', 'partnership', 'crypto'].includes(newsItem.image) && (
              <img 
                src={newsItem.image} 
                alt={newsItem.title} 
                className="w-full h-full object-cover"
              />
            )}
          </div>
          
          {/* Content */}
          <div className="max-w-3xl mx-auto">
            {newsItem.content ? (
              <div 
                className="prose prose-lg prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: newsItem.content }}
              />
            ) : (
              <p className="text-gray-300 text-lg">{newsItem.excerpt}</p>
            )}
            
            {/* Share Section */}
            <div className="mt-12 pt-6 border-t border-gray-800">
              <h4 className="text-white font-medium mb-4 flex items-center">
                <Share2 className="h-4 w-4 mr-2" />
                Share This Article
              </h4>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" className="rounded-full bg-blue-900/20 border-blue-800 text-blue-400 hover:bg-blue-900/40">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full bg-sky-900/20 border-sky-800 text-sky-400 hover:bg-sky-900/40">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full bg-blue-900/20 border-blue-800 text-blue-400 hover:bg-blue-900/40">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full bg-red-900/20 border-red-800 text-red-400 hover:bg-red-900/40">
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Related Articles */}
          {relatedNews.length > 0 && (
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-white mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedNews.map((item) => (
                  <Link key={item.id} to={`/news/${item.id}`}>
                    <div className="bg-[#1A1A1A] rounded-lg overflow-hidden hover:bg-[#222] transition-colors">
                      <div className={`h-48 bg-gradient-to-tr ${
                        item.image === 'business' ? 'from-blue-900/30 to-purple-900/30' :
                        item.image === 'partnership' ? 'from-teal-900/30 to-blue-900/30' :
                        'from-purple-900/30 to-pink-900/30'
                      }`}>
                        {item.image && typeof item.image === 'string' && !['business', 'partnership', 'crypto'].includes(item.image) && (
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                      <div className="p-4">
                        <div className="text-sm text-gray-400 mb-2 flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{item.date}</span>
                        </div>
                        <h4 className="font-medium text-white line-clamp-2 mb-2">{item.title}</h4>
                        <p className="text-gray-400 text-sm line-clamp-2">{item.excerpt}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default NewsDetail;
