import React, { useState } from 'react';
import { 
  MessageSquare, 
  Heart, 
  Send, 
  User, 
  Compass, 
  Sparkles, 
  CheckCircle2,
  Plus
} from 'lucide-react';
import { Language } from '../types';

interface ForumPost {
  id: string;
  author: string;
  city: string;
  category: string;
  title: string;
  content: string;
  likes: number;
  replies: { author: string; text: string; time: string }[];
  time: string;
}

const initialPosts: ForumPost[] = [
  {
    id: 'post-1',
    author: 'Sunil Bajpai',
    city: 'Kanpur',
    category: 'Yatra Guidance',
    title: 'Kashi Vishwanath Corridor & Ganga Aarti Tips for Senior Citizens',
    content: 'Just returned from Varanasi. For senior citizens, enter via Gate No. 4 (Chhattadwar) where battery golf carts operate directly to the sanctum corridor. Avoid midday heat and attend the 7 PM Ganga Aarti from a bajra boat.',
    likes: 48,
    time: '3 hours ago',
    replies: [
      { author: 'Meera Deshmukh', text: 'Thank you Sunil ji! Taking my elderly parents next month. Are wheelchairs easily provided?', time: '1 hour ago' },
      { author: 'Sunil Bajpai', text: 'Yes, free wheelchairs with volunteer sevaks are stationed at Gate 4 Helpdesk.', time: '40 min ago' }
    ]
  },
  {
    id: 'post-2',
    author: 'Aarti Trivedi',
    city: 'Ahmedabad',
    category: 'Live Darshan Experience',
    title: 'Ujjain Mahakal Bhasma Aarti Spiritual Reverberation',
    content: 'Witnessing the Bhasma Aarti at 4 AM is a life-changing experience. The acoustic echo of damru and shankhanaad cleanses every negative thought. Remember to book the online token at least 15 days in advance.',
    likes: 72,
    time: 'Yesterday',
    replies: [
      { author: 'Deepak Verma', text: 'Har Har Mahadev! Did you follow the traditional dhoti/sari dress code requirement?', time: '20 hours ago' },
      { author: 'Aarti Trivedi', text: 'Yes, men must wear unstitched cotton dhoti and women pure silk or cotton sari for sanctum entry.', time: '18 hours ago' }
    ]
  }
];

export const CommunityForum: React.FC<{ currentLang: Language }> = () => {
  const [posts, setPosts] = useState<ForumPost[]>(initialPosts);
  const [showNewPostForm, setShowNewPostForm] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newCity, setNewCity] = useState('');
  const [newCategory, setNewCategory] = useState('Yatra Guidance');
  const [replyTextMap, setReplyTextMap] = useState<Record<string, string>>({});

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newContent) return;

    const newPost: ForumPost = {
      id: `post-${Date.now()}`,
      author: newAuthor.trim() || 'Devotee Pilgrim',
      city: newCity.trim() || 'Bharat',
      category: newCategory,
      title: newTitle.trim(),
      content: newContent.trim(),
      likes: 1,
      time: 'Just now',
      replies: []
    };

    setPosts([newPost, ...posts]);
    setNewTitle('');
    setNewContent('');
    setShowNewPostForm(false);
  };

  const handleLike = (id: string) => {
    setPosts(posts.map(p => p.id === id ? { ...p, likes: p.likes + 1 } : p));
  };

  const handleAddReply = (postId: string, e: React.FormEvent) => {
    e.preventDefault();
    const text = replyTextMap[postId];
    if (!text?.trim()) return;

    setPosts(posts.map(p => {
      if (p.id === postId) {
        return {
          ...p,
          replies: [...p.replies, { author: 'Pilgrim', text: text.trim(), time: 'Just now' }]
        };
      }
      return p;
    }));

    setReplyTextMap({ ...replyTextMap, [postId]: '' });
  };

  return (
    <div className="space-y-6">
      <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800">
            <MessageSquare className="w-4 h-4" />
            <span>Devotee Sangha & Yatra Forum · भक्त सत्संग</span>
          </div>
          <h2 className="text-2xl font-cinzel font-bold text-stone-900 mt-1">
            Pilgrim Discussions & Sacred Experiences
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
            Share yatra routes, temple guidelines, seva experiences, and sacred anecdotes with fellow devotees
          </p>
        </div>

        <button
          onClick={() => setShowNewPostForm(!showNewPostForm)}
          className="px-4 py-2 bg-amber-800 hover:bg-amber-900 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 self-start md:self-center"
        >
          <Plus className="w-4 h-4" />
          <span>{showNewPostForm ? 'Close Form' : 'Start Discussion'}</span>
        </button>
      </div>

      {showNewPostForm && (
        <form onSubmit={handleCreatePost} className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm space-y-3">
          <h3 className="text-sm font-bold text-stone-900 font-cinzel">Start a New Pilgrim Conversation</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <input
              type="text"
              required
              placeholder="Your Name"
              value={newAuthor}
              onChange={(e) => setNewAuthor(e.target.value)}
              className="px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-amber-700"
            />
            <input
              type="text"
              placeholder="Your City"
              value={newCity}
              onChange={(e) => setNewCity(e.target.value)}
              className="px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-amber-700"
            />
            <select
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-amber-700 font-medium"
            >
              <option value="Yatra Guidance">Yatra Guidance</option>
              <option value="Live Darshan Experience">Live Darshan Experience</option>
              <option value="Puja & Ritual Queries">Puja & Ritual Queries</option>
              <option value="Miracle & Blessings">Miracle & Blessings</option>
            </select>
          </div>
          <input
            type="text"
            required
            placeholder="Topic Title (e.g. Somnath Temple Darshan timings during Shravan)"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-amber-700 font-medium"
          />
          <textarea
            rows={3}
            required
            placeholder="Share your pilgrimage details, query, or guidance..."
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-amber-700"
          />
          <button
            type="submit"
            className="py-2 px-5 bg-amber-800 hover:bg-amber-900 text-white text-xs font-bold rounded-lg cursor-pointer transition-colors"
          >
            Publish Discussion
          </button>
        </form>
      )}

      {/* Posts List */}
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm space-y-4">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider">
                  {post.category}
                </span>
                <span className="text-[11px] text-stone-400">{post.time}</span>
              </div>
              <h3 className="text-base font-bold text-stone-900 mt-1 font-cinzel">{post.title}</h3>
              <p className="text-xs text-stone-700 mt-1.5 leading-relaxed">{post.content}</p>
              <div className="flex items-center gap-2 mt-3 text-xs text-stone-500">
                <User className="w-3.5 h-3.5 text-stone-400" />
                <span className="font-semibold text-stone-800">{post.author}</span>
                <span>({post.city})</span>
              </div>
            </div>

            {/* Replies section */}
            <div className="pt-3 border-t border-stone-100 space-y-2">
              <div className="flex items-center justify-between text-xs text-stone-500">
                <button
                  onClick={() => handleLike(post.id)}
                  className="flex items-center gap-1.5 hover:text-red-600 transition-colors cursor-pointer"
                >
                  <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500/20" />
                  <span className="tabular-nums font-semibold">{post.likes} Devotees Blessed</span>
                </button>
                <span>{post.replies.length} replies</span>
              </div>

              {post.replies.length > 0 && (
                <div className="space-y-2 pt-2">
                  {post.replies.map((rep, idx) => (
                    <div key={idx} className="p-2.5 bg-stone-50 rounded-lg text-xs space-y-0.5">
                      <div className="flex justify-between font-semibold text-stone-800">
                        <span>{rep.author}</span>
                        <span className="text-[10px] text-stone-400 font-normal">{rep.time}</span>
                      </div>
                      <p className="text-stone-600">{rep.text}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Reply Form */}
              <form onSubmit={(e) => handleAddReply(post.id, e)} className="flex gap-2 pt-2">
                <input
                  type="text"
                  placeholder="Reply to this discussion..."
                  value={replyTextMap[post.id] || ''}
                  onChange={(e) => setReplyTextMap({ ...replyTextMap, [post.id]: e.target.value })}
                  className="flex-1 px-3 py-1.5 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-amber-700"
                />
                <button
                  type="submit"
                  className="p-2 bg-amber-800 hover:bg-amber-900 text-white rounded-lg text-xs cursor-pointer transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
