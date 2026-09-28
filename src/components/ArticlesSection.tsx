import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  Eye, 
  Heart, 
  Share2, 
  MessageSquare, 
  ChevronRight, 
  User, 
  Send,
  X
} from 'lucide-react';
import { ArticleItem, Language } from '../types';
import { translations } from '../i18n/translations';

interface ArticlesSectionProps {
  currentLang: Language;
  articles: ArticleItem[];
  onOpenAdmin: () => void;
}

export const ArticlesSection: React.FC<ArticlesSectionProps> = ({
  currentLang,
  articles,
  onOpenAdmin
}) => {
  const t = translations[currentLang] || translations.en;
  
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [likesMap, setLikesMap] = useState<Record<string, number>>({});
  const [articleComments, setArticleComments] = useState<Record<string, { author: string; text: string; time: string }[]>>({
    'puri-jagannath-architectural-mysteries': [
      { author: 'Soumya Ranjan Panda', text: 'I have witnessed the Patitapabana Bana change myself. It is truly a divine spectacle that gives goosebumps.', time: '2 days ago' },
      { author: 'Dr. Vivek Swaminathan', text: 'The acoustic cancellation at the Singhadwara step is a masterstroke of stone reverberation physics.', time: 'Yesterday' }
    ]
  });
  const [newCommentAuthor, setNewCommentAuthor] = useState('');
  const [newCommentText, setNewCommentText] = useState('');

  const categories = ['All', 'Temple Architecture', 'Vedic Wisdom', 'Sacred Geography', 'Rituals', 'Festivals'];

  const filteredArticles = articles.filter(a => {
    if (selectedCategory === 'All') return true;
    return a.category === selectedCategory;
  });

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikesMap(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedArticle || !newCommentText.trim()) return;

    const newEntry = {
      author: newCommentAuthor.trim() || 'Pilgrim Devotee',
      text: newCommentText.trim(),
      time: 'Just now'
    };

    setArticleComments(prev => ({
      ...prev,
      [selectedArticle.id]: [newEntry, ...(prev[selectedArticle.id] || [])]
    }));

    setNewCommentText('');
  };

  return (
    <div className="space-y-6">
      
      {/* Editorial Header */}
      <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-stone-500 font-sans">
              <BookOpen className="w-4 h-4 text-amber-800" />
              <span>Cultural Roots & Sacred Architecture · culroot inspired</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-cinzel font-bold text-stone-900 mt-1">
              Ancient Wisdom & Temple Heritage
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl leading-relaxed">
              Unravel the profound science, sacred geometry, and metaphysical lore behind India's centuries-old temples, holy rituals, and architectural marvels.
            </p>
          </div>

          <button
            onClick={onOpenAdmin}
            className="px-4 py-2 bg-amber-50 hover:bg-amber-100 text-amber-950 border border-amber-300 rounded-xl text-xs font-bold transition-colors cursor-pointer whitespace-nowrap self-start md:self-center"
          >
            + Write / Publish Article
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mt-6 pt-4 border-t border-stone-100">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-amber-800 text-white font-semibold shadow-sm'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((art) => {
          const totalLikes = art.likes + (likesMap[art.id] || 0);
          return (
            <article
              key={art.id}
              onClick={() => setSelectedArticle(art)}
              className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div className="p-6 space-y-3">
                {/* Clean unboxed metadata with dot separator (Strict Zero-Pill rule) */}
                <div className="flex items-center gap-2 text-xs text-stone-500 font-sans">
                  <span className="font-semibold text-amber-900">{art.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{art.readTime}</span>
                </div>

                <h3 className="text-lg font-cinzel font-bold text-stone-900 group-hover:text-amber-800 transition-colors leading-snug">
                  {art.title}
                </h3>

                <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                  {art.summary}
                </p>
              </div>

              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <span className="truncate max-w-[140px]">{art.author}</span>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={(e) => handleLike(art.id, e)}
                      className="flex items-center gap-1 hover:text-red-600 transition-colors cursor-pointer"
                    >
                      <Heart className="w-3.5 h-3.5" />
                      <span className="tabular-nums">{totalLikes}</span>
                    </button>
                    <span className="text-amber-800 font-semibold group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                      Read <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Full Article Reader Modal with Editorial Drop Cap */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-3xl bg-[#FBF9F5] rounded-2xl shadow-2xl border border-stone-300 overflow-hidden my-8">
            
            {/* Modal Header Strip */}
            <div className="bg-stone-900 p-4 sm:p-6 text-white flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-amber-400 font-mono">
                  {selectedArticle.category}
                </span>
                <div className="text-xs text-stone-400 mt-0.5">
                  Published {selectedArticle.publishedAt} · {selectedArticle.readTime}
                </div>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="p-1 rounded-full text-stone-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Reading Column (Editorial formatting) */}
            <div className="p-6 sm:p-10 max-w-2xl mx-auto space-y-6">
              <div>
                <h1 className="text-2xl sm:text-3xl font-cinzel font-bold text-stone-950 leading-tight">
                  {selectedArticle.title}
                </h1>
                <p className="text-sm font-medium text-amber-950 mt-1 italic">
                  {selectedArticle.hindiTitle}
                </p>
                <div className="flex items-center gap-2 mt-4 text-xs text-stone-600 border-b border-stone-200 pb-4">
                  <User className="w-3.5 h-3.5 text-stone-500" />
                  <span className="font-semibold text-stone-900">{selectedArticle.author}</span>
                  <span>·</span>
                  <span>{selectedArticle.authorRole}</span>
                </div>
              </div>

              {/* Prose with Drop Cap */}
              <div className="text-stone-800 text-sm sm:text-base leading-relaxed space-y-4 font-serif first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-amber-900">
                {selectedArticle.content.split('\n\n').map((para, i) => (
                  <p key={i} className="whitespace-pre-line">{para}</p>
                ))}
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-stone-200 flex flex-wrap gap-2">
                {selectedArticle.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs text-stone-600 bg-stone-200/60 px-2.5 py-1 rounded-md">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Discussion & Devotee Comments */}
              <div className="pt-6 border-t border-stone-200 space-y-4 font-sans">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-stone-900 font-cinzel flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-amber-800" />
                    <span>Devotee Discussion (पाठक विचार)</span>
                  </h4>
                  <span className="text-xs text-stone-500">
                    {(articleComments[selectedArticle.id] || []).length} reflections
                  </span>
                </div>

                {/* Post comment form */}
                <form onSubmit={handleAddComment} className="space-y-2">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <input
                      type="text"
                      placeholder="Your Name (नाम)"
                      value={newCommentAuthor}
                      onChange={(e) => setNewCommentAuthor(e.target.value)}
                      className="px-3 py-1.5 text-xs bg-white border border-stone-300 rounded-lg focus:outline-none focus:border-amber-700"
                    />
                    <input
                      type="text"
                      placeholder="Share your reflection or temple experience..."
                      value={newCommentText}
                      onChange={(e) => setNewCommentText(e.target.value)}
                      className="sm:col-span-2 px-3 py-1.5 text-xs bg-white border border-stone-300 rounded-lg focus:outline-none focus:border-amber-700"
                    />
                  </div>
                  <button
                    type="submit"
                    className="py-1.5 px-4 bg-amber-800 hover:bg-amber-900 text-white rounded-lg text-xs font-semibold cursor-pointer transition-colors"
                  >
                    Post Comment
                  </button>
                </form>

                {/* Comment list */}
                <div className="space-y-2 pt-2">
                  {(articleComments[selectedArticle.id] || []).map((cmt, idx) => (
                    <div key={idx} className="p-3 bg-white border border-stone-200 rounded-xl text-xs space-y-1">
                      <div className="flex items-center justify-between font-semibold text-stone-800">
                        <span>{cmt.author}</span>
                        <span className="text-[10px] text-stone-400 font-normal">{cmt.time}</span>
                      </div>
                      <p className="text-stone-600 leading-snug">{cmt.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
