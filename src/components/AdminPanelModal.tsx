import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  Plus, 
  FileText, 
  Video, 
  Heart, 
  CheckCircle, 
  Edit3, 
  Trash2,
  Calendar,
  Layers
} from 'lucide-react';
import { ArticleItem, Temple, PujaBooking, DonationRecord } from '../types';

interface AdminPanelModalProps {
  isOpen: boolean;
  onClose: () => void;
  articles: ArticleItem[];
  onAddArticle: (article: ArticleItem) => void;
  onDeleteArticle: (id: string) => void;
  temples: Temple[];
  onUpdateTempleStream: (templeId: string, streamUrl: string) => void;
  pujaBookings: PujaBooking[];
  donations: DonationRecord[];
}

export const AdminPanelModal: React.FC<AdminPanelModalProps> = ({
  isOpen,
  onClose,
  articles,
  onAddArticle,
  onDeleteArticle,
  temples,
  onUpdateTempleStream,
  pujaBookings,
  donations
}) => {
  const [activeTab, setActiveTab] = useState<'create-article' | 'manage-articles' | 'manage-streams' | 'reports'>('create-article');
  
  // New article state
  const [title, setTitle] = useState('');
  const [hindiTitle, setHindiTitle] = useState('');
  const [category, setCategory] = useState<'Temple Architecture' | 'Vedic Wisdom' | 'Rituals' | 'Festivals' | 'Sacred Geography'>('Temple Architecture');
  const [author, setAuthor] = useState('Acharya Vidyadhar');
  const [authorRole, setAuthorRole] = useState('Senior Vedic Research Fellow');
  const [readTime, setReadTime] = useState('5 min read');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('Temple Science, Vedic Heritage, Architecture');
  const [publishSuccess, setPublishSuccess] = useState(false);

  // Stream edit state
  const [selectedTempleId, setSelectedTempleId] = useState(temples[0]?.id || '');
  const [newStreamUrl, setNewStreamUrl] = useState(temples[0]?.streamUrl || '');
  const [streamSuccess, setStreamSuccess] = useState(false);

  if (!isOpen) return null;

  const handleCreateArticle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return;

    const newArt: ArticleItem = {
      id: `art-${Date.now()}`,
      title: title.trim(),
      hindiTitle: hindiTitle.trim() || title.trim(),
      category: category,
      author: author.trim() || 'Admin Scholar',
      authorRole: authorRole.trim() || 'Cultural Contributor',
      readTime: readTime,
      summary: summary.trim() || content.slice(0, 140) + '...',
      content: content.trim(),
      publishedAt: new Date().toISOString().split('T')[0],
      views: 120,
      likes: 15,
      tags: tags.split(',').map(t => t.trim()).filter(Boolean),
      commentsCount: 0
    };

    onAddArticle(newArt);
    setPublishSuccess(true);
    setTimeout(() => {
      setPublishSuccess(false);
      setTitle('');
      setHindiTitle('');
      setSummary('');
      setContent('');
      setActiveTab('manage-articles');
    }, 1200);
  };

  const handleSaveStream = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTempleId || !newStreamUrl) return;
    onUpdateTempleStream(selectedTempleId, newStreamUrl);
    setStreamSuccess(true);
    setTimeout(() => setStreamSuccess(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-stone-300 overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="bg-stone-900 text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-amber-400" />
            <div>
              <h3 className="text-lg font-cinzel font-bold">
                MahaDarshan Editorial & Sanctum Admin Hub
              </h3>
              <p className="text-xs text-stone-400">
                Publish dynamic cultural articles, manage 24/7 video streams, and monitor bookings
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-stone-400 hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-stone-200 px-6 pt-3 bg-stone-50 gap-4 text-xs font-semibold overflow-x-auto">
          <button
            onClick={() => setActiveTab('create-article')}
            className={`pb-3 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'create-article'
                ? 'border-amber-800 text-amber-900'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Write New Article</span>
          </button>
          <button
            onClick={() => setActiveTab('manage-articles')}
            className={`pb-3 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'manage-articles'
                ? 'border-amber-800 text-amber-900'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Published Articles ({articles.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('manage-streams')}
            className={`pb-3 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'manage-streams'
                ? 'border-amber-800 text-amber-900'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <Video className="w-3.5 h-3.5" />
            <span>Temple Stream Feeds</span>
          </button>
          <button
            onClick={() => setActiveTab('reports')}
            className={`pb-3 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'reports'
                ? 'border-amber-800 text-amber-900'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Bookings & Donations</span>
          </button>
        </div>

        {/* Tab 1: Create Article Form */}
        {activeTab === 'create-article' && (
          <form onSubmit={handleCreateArticle} className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
            {publishSuccess && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span className="font-semibold">Article published successfully! It is now live on the homepage.</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Article Title (English)</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Sacred Geometry of Brihadisvara Temple"
                  className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-amber-700"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Hindi Title (हिंदी शीर्षक)</label>
                <input
                  type="text"
                  value={hindiTitle}
                  onChange={(e) => setHindiTitle(e.target.value)}
                  placeholder="e.g. बृहदेश्वर मंदिर का रहस्यमय स्थापत्य"
                  className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-amber-700"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as any)}
                  className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-amber-700"
                >
                  <option value="Temple Architecture">Temple Architecture</option>
                  <option value="Vedic Wisdom">Vedic Wisdom</option>
                  <option value="Rituals">Rituals</option>
                  <option value="Festivals">Festivals</option>
                  <option value="Sacred Geography">Sacred Geography</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Estimated Read Time</label>
                <input
                  type="text"
                  value={readTime}
                  onChange={(e) => setReadTime(e.target.value)}
                  placeholder="e.g. 5 min read"
                  className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-amber-700"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Author Name</label>
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-amber-700"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Author Title / Role</label>
                <input
                  type="text"
                  value={authorRole}
                  onChange={(e) => setAuthorRole(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-amber-700"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">Brief Lead Deck / Summary (1-2 sentences)</label>
              <textarea
                rows={2}
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                placeholder="Hook describing the archaeological or spiritual discovery..."
                className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-amber-700"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">Full Article Prose & Shastric References</label>
              <textarea
                rows={7}
                required
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write full longform cultural analysis, shastras, archaeological notes, and pilgrim guidance..."
                className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-amber-700 font-serif leading-relaxed"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">Comma-Separated Tags</label>
              <input
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="Temple Architecture, Tanjore, Cholas, Granite"
                className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-amber-700"
              />
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                className="py-2.5 px-6 bg-amber-800 hover:bg-amber-900 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer shadow-sm"
              >
                Publish Article to Portal
              </button>
            </div>
          </form>
        )}

        {/* Tab 2: Manage Articles */}
        {activeTab === 'manage-articles' && (
          <div className="p-6 space-y-3 max-h-[70vh] overflow-y-auto">
            {articles.map((art) => (
              <div key={art.id} className="p-4 bg-stone-50 border border-stone-200 rounded-xl flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800">
                    {art.category} · {art.publishedAt}
                  </span>
                  <h4 className="text-sm font-bold text-stone-900 truncate">{art.title}</h4>
                  <p className="text-xs text-stone-500">By {art.author} · {art.views} reads</p>
                </div>
                <button
                  onClick={() => onDeleteArticle(art.id)}
                  className="p-2 text-stone-400 hover:text-red-600 transition-colors cursor-pointer"
                  title="Delete Article"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Temple Streams Management */}
        {activeTab === 'manage-streams' && (
          <form onSubmit={handleSaveStream} className="p-6 space-y-4">
            {streamSuccess && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span className="font-semibold">Sanctum stream updated! Devotees will now watch the new feed.</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">Select Shrine</label>
              <select
                value={selectedTempleId}
                onChange={(e) => {
                  setSelectedTempleId(e.target.value);
                  const tpl = temples.find(t => t.id === e.target.value);
                  if (tpl) setNewStreamUrl(tpl.streamUrl);
                }}
                className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-amber-700 font-medium"
              >
                {temples.map((tpl) => (
                  <option key={tpl.id} value={tpl.id}>{tpl.name} ({tpl.city})</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">Live Embed / Stream URL</label>
              <input
                type="url"
                required
                value={newStreamUrl}
                onChange={(e) => setNewStreamUrl(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-amber-700 font-mono"
              />
            </div>

            <button
              type="submit"
              className="py-2.5 px-6 bg-amber-800 hover:bg-amber-900 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer shadow-sm"
            >
              Update Sanctum Broadcast Feed
            </button>
          </form>
        )}

        {/* Tab 4: Bookings & Donations Report */}
        {activeTab === 'reports' && (
          <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
            <div>
              <h4 className="text-sm font-bold text-stone-900 mb-2 font-cinzel">Recent Special Puja Bookings</h4>
              {pujaBookings.length === 0 ? (
                <div className="p-4 bg-stone-50 rounded-xl text-xs text-stone-500 text-center">No pujas booked yet.</div>
              ) : (
                <div className="space-y-2">
                  {pujaBookings.map((b) => (
                    <div key={b.bookingId} className="p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs flex justify-between">
                      <div>
                        <span className="font-bold text-stone-900">{b.devoteeName}</span>
                        <span className="text-stone-500 block">{b.pujaName} at {b.templeName}</span>
                        <span className="text-amber-800 text-[11px]">Gotra: {b.gotra} · Scheduled: {b.pujaDate}</span>
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-amber-900">₹{b.amount}</span>
                        <span className="text-[10px] text-emerald-600 block">{b.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <h4 className="text-sm font-bold text-stone-900 mb-2 font-cinzel">Seva Contributions & 80G Receipts</h4>
              {donations.length === 0 ? (
                <div className="p-4 bg-stone-50 rounded-xl text-xs text-stone-500 text-center">No donations recorded yet.</div>
              ) : (
                <div className="space-y-2">
                  {donations.map((d) => (
                    <div key={d.transactionId} className="p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs flex justify-between">
                      <div>
                        <span className="font-bold text-stone-900">{d.donorName}</span>
                        <span className="text-stone-500 block">{d.cause} ({d.templeName})</span>
                        <span className="text-[10px] text-stone-400 font-mono">{d.transactionId}</span>
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-amber-900 font-mono">₹{d.amount.toLocaleString()}</span>
                        <span className="text-[10px] text-stone-500 block">{d.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
