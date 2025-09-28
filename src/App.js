import React from 'react';

// --- SVG Icons ---
// Simple icons to avoid external dependencies.
const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
  </svg>
);

const BookOpenIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
    <path d="M10.21 1.21a.75.75 0 01.447.882l-1 4.5A.75.75 0 019 7.028V12.5a.75.75 0 01-1.5 0V7.028a.75.75 0 01-.658-.415l-1-4.5A.75.75 0 016.79 1.21c1.29.363 2.548.363 3.842 0zM5.5 13.5A2.5 2.5 0 008 16h4a2.5 2.5 0 002.5-2.5V8.5A2.5 2.5 0 0012 6H8a2.5 2.5 0 00-2.5 2.5v5z" />
    <path d="M5.005 6.096a.75.75 0 01.882-.447c1.29.363 2.548.363 3.842 0a.75.75 0 01.882.447l.5 2.25A.75.75 0 0110.5 9h-1a.75.75 0 01-.658-.415l-.5-2.25zM12.5 13.5a1 1 0 100-2 1 1 0 000 2zM8.5 13.5a1 1 0 100-2 1 1 0 000 2z" />
  </svg>
);

const LinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 inline-block" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l-1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
    </svg>
);

const PencilIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 hover:text-blue-500" viewBox="0 0 20 20" fill="currentColor">
      <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
      <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
    </svg>
);


const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 hover:text-red-500" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
  </svg>
);


// --- Initial Data ---
// This data acts as a mock database.
const initialSalesReps = [
    { id: 'rep1', name: '德田 耕明' },
    { id: 'rep2', name: '田畑 美香' },
    { id: 'rep3', name: '金村 晃功' },
    { id: 'rep4', name: '湯谷 憲一' },
    { id: 'rep5', name: '光川 実緒' },
    { id: 'rep6', name: '西村 貴裕' },
    { id: 'rep7', name: '吉田 祐' },
    { id: 'rep8', name: '小松 大樹' },
    { id: 'rep9', name: '稲尾 拓慎' },
    { id: 'rep10', name: '舟橋 裕也' },
    { id: 'rep11', name: '髙木 徹' },
    { id: 'rep12', name: '杉村 悠斗' },
    { id: 'rep13', name: '葉山 一輝' },
    { id: 'rep14', name: '阿部 澄人' },
];

const initialTrainingItems = [
    { id: 'item1', name: 'ヒアリングトーク', category: '商談スキル', documents: [] },
    { id: 'item2', name: '暮らしの上位概念トーク', category: '商談スキル', documents: [] },
    { id: 'item3', name: '資金計画書説明トーク', category: '資金計画', documents: [] },
    { id: 'item4', name: 'スケジュール決定トーク', category: '商談スキル', documents: [] },
    { id: 'item5', name: '土地トーク', category: '土地知識', documents: [] },
    { id: 'item6', name: '競合対策トーク', category: '商談スキル', documents: [] },
    { id: 'item7', name: '商品トーク', category: '商品知識', documents: [] },
    { id: 'item8', name: '構造仕様トーク', category: '商品知識', documents: [] },
    { id: 'item9', name: 'トータルコストトーク', category: '資金計画', documents: [] },
    { id: 'item10', name: '地震対策トーク', category: '商品知識', documents: [] },
    { id: 'item11', name: '断熱トーク', category: '商品知識', documents: [] },
    { id: 'item12', name: '気密トーク', category: '商品知識', documents: [] },
    { id: 'item13', name: '施工方法トーク', category: '商品知識', documents: [] },
    { id: 'item14', name: '太陽光トーク', category: '商品知識', documents: [] },
    { id: 'item15', name: '換気システムトーク', category: '商品知識', documents: [] },
    { id: 'item16', name: '空気質トーク', category: '商品知識', documents: [] },
    { id: 'item17', name: '間取りトーク', category: '設計', documents: [] },
    { id: 'item18', name: 'デザイントーク', category: '設計', documents: [] },
    { id: 'item19', name: '保証トーク', category: '顧客関係', documents: [] },
    { id: 'item20', name: 'IOTトーク', category: '商品知識', documents: [] },
    { id: 'item21', name: '補助金トーク', category: '資金計画', documents: [] },
];

const initialProgress = {
  rep1: {
    item1: { status: '◎', comments: [{id: 1, date: '2025-09-20', text: '素晴らしいスタートです。'}] },
    item2: { status: '△', comments: [{id: 2, date: '2025-09-22', text: '課題の深掘りにもう一歩期待。'}] },
    item3: { status: '✖', comments: [{id: 3, date: '2025-09-21', text: '製品知識の再確認が必要です。'}] },
    item4: { status: '未着手', comments: [] },
    item5: { status: '◎', comments: [] },
    item6: { status: '△', comments: [{id: 4, date: '2025-09-25', text: '定期連絡を習慣化しましょう。'}] },
    item7: { status: '未着手', comments: [] },
    item8: { status: '✖', comments: [] },
    generalComments: [{id: 1001, date: '2025-09-27', text: '全体的に順調です。特に商談スキルが伸びていますね。'}],
  },
  rep2: {
    item1: { status: '◎', comments: [] },
    item2: { status: '◎', comments: [] },
    item3: { status: '△', comments: [{id: 5, date: '2025-09-24', text: '次回ロープレで確認します。'}] },
    item4: { status: '△', comments: [] },
    item5: { status: '◎', comments: [] },
    item6: { status: '◎', comments: [{id: 6, date: '2025-09-23', text: '顧客からの評判が良いです。'}] },
    item7: { status: '◎', comments: [] },
    item8: { status: '◎', comments: [] },
    generalComments: [],
  },
  rep3: {
    item1: { status: '△', comments: [{id: 7, date: '2025-09-26', text: 'トークスクリプトを見直しましょう。'}] },
    item2: { status: '✖', comments: [] },
    item3: { status: '未着手', comments: [] },
    item4: { status: '未着手', comments: [] },
    item5: { status: '△', comments: [] },
    item6: { status: '✖', comments: [] },
    item7: { status: '未着手', comments: [] },
    item8: { status: '✖', comments: [] },
    generalComments: [{id: 1002, date: '2025-09-28', text: '来週のロープレに向けて、商品知識のインプットを強化してください。'}],
  },
};

const STATUS_OPTIONS = ['未着手', '✖', '△', '◎'];
const STATUS_VALUE = { '未着手': 0, '✖': 0.1, '△': 0.5, '◎': 1 };
const STATUS_COLOR = {
  '未着手': { text: 'text-gray-500', bg: 'bg-gray-200' },
  '✖': { text: 'text-red-500', bg: 'bg-red-200' },
  '△': { text: 'text-yellow-500', bg: 'bg-yellow-200' },
  '◎': { text: 'text-green-500', bg: 'bg-green-200' }
};

// --- Helper Functions ---
function dataUrlToBlobUrl(dataUrl) {
  const [header, base64] = dataUrl.split(',');
  const mime = (header.match(/data:(.*?);base64/) || [])[1] || 'application/pdf';
  const bin = atob(base64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  const blobUrl = URL.createObjectURL(new Blob([bytes], { type: mime }));
  return blobUrl;
}


// --- Mock API ---
const mockApi = {
    uploadFile: (file) => {
        return new Promise((resolve, reject) => {
            if (file.size > 10 * 1024 * 1024) return reject({ status: 413, message: 'ファイルサイズが10MBを超えています。' });
            if (file.type !== 'application/pdf') return reject({ status: 415, message: 'PDFファイルのみアップロードできます。' });
            setTimeout(() => {
                const reader = new FileReader();
                reader.onload = () => resolve({ name: file.name, url: reader.result, storageKey: `materials/${Date.now()}-${file.name}` });
                reader.onerror = (error) => reject({ status: 500, message: 'ファイル読み込み中にエラーが発生しました。' });
                reader.readAsDataURL(file);
            }, 1500);
        });
    },
    getSignedUrl: (document) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (document.url) resolve(document.url);
                else reject({ status: 404, message: 'ファイルが見つかりません。' });
            }, 500);
        });
    }
};


// --- Components ---

const Toast = ({ message, type, onDismiss }) => {
    if (!message) return null;
    const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';
    React.useEffect(() => { const timer = setTimeout(onDismiss, 5000); return () => clearTimeout(timer); }, [onDismiss]);
    return ( <div className="fixed top-5 right-5 z-50"> <div className={`${bgColor} text-white font-bold rounded-lg shadow-lg py-3 px-5 flex items-center`}> <span className="flex-grow">{message}</span> <button onClick={onDismiss} className="ml-4 font-light text-xl">&times;</button> </div> </div> );
};

const PasswordModal = ({ onClose, onSubmit }) => {
    const [password, setPassword] = React.useState('');
    const handleSubmit = (e) => { e.preventDefault(); onSubmit(password); };
    return ( <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4" onClick={onClose}> <div className="bg-white rounded-lg shadow-xl w-full max-w-sm" onClick={e => e.stopPropagation()}> <form onSubmit={handleSubmit}> <div className="p-6 border-b"> <h3 className="text-lg font-semibold text-gray-800">管理者パスワード</h3> </div> <div className="p-6"> <label htmlFor="password-input" className="block text-sm font-medium text-gray-700 mb-2"> パスワードを入力してください </label> <input type="password" id="password-input" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500" autoFocus /> </div> <div className="p-4 bg-gray-50 flex justify-end space-x-3 rounded-b-lg"> <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"> キャンセル </button> <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"> 決定 </button> </div> </form> </div> </div> );
};


const EditItemModal = ({ item, onClose, onSave, showToast }) => {
    const [existingDocuments, setExistingDocuments] = React.useState(item.documents || []);
    const [newFiles, setNewFiles] = React.useState([]);
    const [isSaving, setIsSaving] = React.useState(false);
    const [isDragging, setIsDragging] = React.useState(false);

    const handleFileSelect = (selectedFiles) => {
        const pdfFiles = [...selectedFiles].filter(file => file.type === 'application/pdf');
        if (pdfFiles.length !== selectedFiles.length) showToast('PDFファイルのみ選択できます。', 'error');
        setNewFiles(prev => [...prev, ...pdfFiles]);
    };

    const handleDragOver = (e) => { e.preventDefault(); setIsDragging(true); };
    const handleDragLeave = (e) => { e.preventDefault(); setIsDragging(false); };
    const handleDrop = (e) => { e.preventDefault(); setIsDragging(false); handleFileSelect(e.dataTransfer.files); };

    const removeExistingDocument = (docNameToRemove) => setExistingDocuments(docs => docs.filter(doc => doc.name !== docNameToRemove));
    const removeNewFile = (fileNameToRemove) => setNewFiles(files => files.filter(file => file.name !== fileNameToRemove));

    const handleSave = async (e) => {
        e.stopPropagation();
        setIsSaving(true);
        try {
            const uploadedDocuments = await Promise.all(newFiles.map(file => mockApi.uploadFile(file)));
            const finalDocuments = [...existingDocuments, ...uploadedDocuments];
            await onSave(item.id, finalDocuments);
            showToast('資料が正常に保存されました。', 'success');
            onClose();
        } catch (error) {
            showToast(`保存に失敗しました: ${error.message || '不明なエラー'}`, 'error');
        } finally {
            setIsSaving(false);
        }
    };

    const handleCancel = (e) => { e.stopPropagation(); onClose(); };

    return ( <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4" onClick={handleCancel}> <div className="bg-white rounded-lg shadow-xl w-full max-w-lg" onClick={e => e.stopPropagation()}> <div className="p-6 border-b"> <h3 className="text-lg font-semibold text-gray-800">「{item.name}」の資料を編集</h3> </div> <div className="p-6"> <div onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop} className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors relative ${ isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-gray-50' }`}> <p className="text-gray-500">ここにPDFファイルをドラッグ＆ドロップ</p> <p className="text-xs text-gray-400 mt-1">またはクリックしてファイルを選択</p> <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" multiple accept=".pdf" onChange={(e) => handleFileSelect(e.target.files)} disabled={isSaving}/> </div> <div className="mt-4"> <h4 className="font-semibold text-sm mb-2">添付資料一覧:</h4> {existingDocuments.length === 0 && newFiles.length === 0 ? ( <p className="text-sm text-gray-400">添付されている資料はありません。</p> ) : ( <ul className="space-y-2 max-h-40 overflow-y-auto pr-2"> {existingDocuments.map((doc, index) => ( <li key={`exist-${index}`} className="flex justify-between items-center text-sm p-2 bg-gray-100 rounded"> <span className="text-gray-800 truncate">{doc.name}</span> <button onClick={() => removeExistingDocument(doc.name)} className="ml-4 text-red-500 hover:text-red-700" disabled={isSaving}>&times;</button> </li> ))} {newFiles.map((file, index) => ( <li key={`new-${index}`} className="flex justify-between items-center text-sm p-2 bg-blue-50 rounded"> <span className="truncate text-gray-700">{file.name} (新規)</span> <button onClick={() => removeNewFile(file.name)} className="ml-4 text-red-500 hover:text-red-700" disabled={isSaving}>&times;</button> </li> ))} </ul> )} </div> </div> <div className="p-4 bg-gray-50 flex justify-end space-x-3 rounded-b-lg"> <button onClick={handleCancel} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300" disabled={isSaving}>キャンセル</button> <button onClick={handleSave} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed" disabled={isSaving || (newFiles.length === 0 && JSON.stringify(item.documents) === JSON.stringify(existingDocuments))}> {isSaving ? '保存中...' : '保存'} </button> </div> </div> </div> );
};


const CircularProgress = ({ percentage, size = "large" }) => {
    const isLarge = size === "large"; const radius = isLarge ? 50 : 20; const strokeWidth = isLarge ? 10 : 6; const width = isLarge ? "w-40 h-40" : "w-12 h-12"; const textSize = isLarge ? "text-3xl" : "text-xs"; const circumference = 2 * Math.PI * radius; const offset = circumference - (percentage / 100) * circumference;
    return ( <div className={`relative flex items-center justify-center ${width}`}> <svg className="absolute w-full h-full transform -rotate-90"> <circle className="text-gray-200" stroke="currentColor" strokeWidth={strokeWidth} fill="transparent" r={radius} cx="50%" cy="50%"/> <circle className="text-blue-500 transition-all duration-500" stroke="currentColor" strokeWidth={strokeWidth} strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" fill="transparent" r={radius} cx="50%" cy="50%"/> </svg> <span className={`${textSize} font-bold text-gray-700`}>{Math.round(percentage)}%</span> </div> );
};

const CategoryProgressBar = ({ category, percentage }) => {
    const roundedPercentage = Math.round(percentage);
    return ( <div className="flex items-center w-full text-xs"> <span className="text-gray-600 w-28 truncate pr-2 text-right">{category}</span> <div className="flex-grow bg-gray-200 rounded-full h-3.5"> <div className="bg-blue-500 h-3.5 rounded-full transition-all duration-500" style={{ width: `${roundedPercentage}%` }} ></div> </div> <span className="font-semibold text-gray-700 w-12 text-left pl-2">{roundedPercentage}%</span> </div> );
};


const AdminPanel = ({ reps, items, onAddRep, onDeleteRep, onAddItem, onDeleteItem, onOpenEditModal }) => {
  const [newRepName, setNewRepName] = React.useState(''); const [newItemName, setNewItemName] = React.useState(''); const [newItemCategory, setNewItemCategory] = React.useState(''); const [isOpen, setIsOpen] = React.useState(false);
  const handleAddRep = (e) => { e.preventDefault(); if (newRepName.trim()) { onAddRep(newRepName.trim()); setNewRepName(''); } }; const handleAddItem = (e) => { e.preventDefault(); if (newItemName.trim() && newItemCategory.trim()) { onAddItem(newItemName.trim(), newItemCategory.trim()); setNewItemName(''); setNewItemCategory(''); } };
  return ( <div className="bg-white p-6 rounded-lg shadow-md mb-8"> <button onClick={() => setIsOpen(!isOpen)} className="w-full text-left font-bold text-lg text-gray-700 flex justify-between items-center"> <span>管理者パネル</span> <span className="text-xl">{isOpen ? '▲' : '▼'}</span> </button> {isOpen && ( <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 border-t pt-6"> <div> <h3 className="text-md font-semibold mb-2 flex items-center"><UserIcon />営業担当者管理</h3> <form onSubmit={handleAddRep} className="flex mb-4"> <input type="text" value={newRepName} onChange={(e) => setNewRepName(e.target.value)} placeholder="新しい担当者名" className="flex-grow p-2 border rounded-l-md focus:ring-2 focus:ring-blue-500" /> <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600">追加</button> </form> <ul className="space-y-2 max-h-48 overflow-y-auto pr-2"> {reps.map(rep => ( <li key={rep.id} className="flex justify-between items-center p-2 border rounded-md bg-gray-50"> <span>{rep.name}</span> <button onClick={() => onDeleteRep(rep.id)}><TrashIcon /></button> </li> ))} </ul> </div> <div> <h3 className="text-md font-semibold mb-2 flex items-center"><BookOpenIcon />教育項目管理</h3> <form onSubmit={handleAddItem} className="space-y-2 mb-4"> <input type="text" value={newItemName} onChange={(e) => setNewItemName(e.target.value)} placeholder="新しい項目名" className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500" /> <input type="text" value={newItemCategory} onChange={(e) => setNewItemCategory(e.target.value)} placeholder="カテゴリ名" className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500" /> <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">項目を追加</button> </form> <ul className="space-y-2 max-h-48 overflow-y-auto pr-2"> {items.map(item => ( <li key={item.id} className="flex justify-between items-center p-2 border rounded-md bg-gray-50"> <div className="flex-grow"> {item.name} <span className="text-sm text-gray-400">({item.category})</span> </div> <div className="flex space-x-2"> <button onClick={() => onOpenEditModal(item.id)}><PencilIcon /></button> <button onClick={() => onDeleteItem(item.id)}><TrashIcon /></button> </div> </li> ))} </ul> </div> </div> )} </div> );
};

const TrainingItemCard = ({ item, repId, progress, onStatusUpdate, onAddComment, onDeleteComment, onOpenFile, isAdminMode }) => {
    const [newComment, setNewComment] = React.useState('');
    const [selectedDate, setSelectedDate] = React.useState(new Date().toISOString().slice(0, 10));
    const [isHistoryExpanded, setIsHistoryExpanded] = React.useState(false);

    const currentProgress = progress || { status: '未着手', comments: [] };
    const itemPercentage = (STATUS_VALUE[currentProgress.status] || 0) * 100;

    const reversedComments = React.useMemo(() => (currentProgress.comments || []).slice().reverse(), [currentProgress.comments]);
    const latestComment = reversedComments[0];
    const olderComments = reversedComments.slice(1);

    const handleAddCommentClick = () => {
        if (newComment.trim() && selectedDate) {
            onAddComment(repId, item.id, newComment.trim(), selectedDate);
            setNewComment('');
        }
    };

    return (
        <div className="p-4 border rounded-lg hover:shadow-lg transition-shadow flex flex-col bg-white">
            <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                    <p className="font-semibold text-gray-700">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.category}</p>
                </div>
                <div className="ml-2">
                  <CircularProgress percentage={itemPercentage} size="small" />
                </div>
            </div>

            {item.documents && item.documents.length > 0 && (
                <div className="mb-3">
                    <p className="text-xs font-bold text-gray-500 mb-1">関連資料:</p>
                    <div className="space-y-1">
                    {item.documents.map((doc, index) => (
                        <button key={index} onClick={() => onOpenFile(doc)} className="w-full text-left block text-sm text-blue-600 hover:underline bg-blue-50 px-2 py-1 rounded truncate">
                            <LinkIcon />{doc.name}
                        </button>
                    ))}
                    </div>
                </div>
            )}
            <div className="mt-auto space-y-3">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className={`${STATUS_COLOR[currentProgress.status].bg} h-2.5 rounded-full`} style={{ width: `${itemPercentage}%` }}></div>
                </div>
                <select value={currentProgress.status} onChange={(e) => onStatusUpdate(repId, item.id, 'status', e.target.value)} disabled={!isAdminMode} className={`w-full p-2 border rounded-md ${STATUS_COLOR[currentProgress.status].text} disabled:bg-gray-100 disabled:cursor-not-allowed`}>
                    {STATUS_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>

                <div className="space-y-2">
                    <h4 className="text-xs font-bold text-gray-500">育成コメント履歴</h4>
                    <div className="text-sm text-gray-700 bg-gray-50 p-2 rounded-md border">
                        {!latestComment && <p className="text-xs text-gray-400 text-center py-4">コメントはありません。</p>}
                        {latestComment && (
                            <div className="group relative pb-1">
                                <div className="flex justify-between items-start">
                                    <span className="font-semibold text-gray-500 text-xs block">{latestComment.date}</span>
                                    {isAdminMode && (
                                        <button onClick={() => onDeleteComment(repId, item.id, latestComment.id)} className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity p-1">
                                            <TrashIcon />
                                        </button>
                                    )}
                                </div>
                                <p className="whitespace-pre-wrap break-words">{latestComment.text}</p>
                            </div>
                        )}
                        {isHistoryExpanded && olderComments.map(c => (
                            <div key={c.id} className="group relative pt-2 mt-2 border-t">
                               <div className="flex justify-between items-start">
                                  <span className="font-semibold text-gray-500 text-xs block">{c.date}</span>
                                  {isAdminMode && (
                                      <button onClick={() => onDeleteComment(repId, item.id, c.id)} className="absolute top-2 right-0 opacity-0 group-hover:opacity-100 transition-opacity p-1">
                                          <TrashIcon />
                                      </button>
                                  )}
                               </div>
                               <p className="whitespace-pre-wrap break-words">{c.text}</p>
                            </div>
                        ))}
                         {olderComments.length > 0 && (
                            <button onClick={() => setIsHistoryExpanded(!isHistoryExpanded)} className="text-xs text-blue-600 hover:underline mt-2">
                                {isHistoryExpanded ? '古い履歴を隠す' : `過去の履歴${olderComments.length}件を表示...`}
                            </button>
                        )}
                    </div>
                </div>

                {isAdminMode && (
                    <div>
                        <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} className="w-full p-2 border rounded-md text-sm text-gray-600" />
                        <textarea placeholder="コメントを入力..." value={newComment} onChange={(e) => setNewComment(e.target.value)} className="w-full p-2 mt-2 border rounded-md text-sm text-gray-600" rows="2" ></textarea>
                        <button onClick={handleAddCommentClick} className="mt-2 w-full px-4 py-1.5 bg-gray-200 text-gray-800 text-sm rounded-md hover:bg-gray-300 disabled:opacity-50" disabled={!newComment.trim() || !selectedDate} >
                            コメントを追加
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

const GeneralCommentSection = ({ comments, onAddComment, onDeleteComment, repId, isAdminMode }) => {
    const [newComment, setNewComment] = React.useState('');
    const [selectedDate, setSelectedDate] = React.useState(new Date().toISOString().slice(0, 10));
    const [isHistoryExpanded, setIsHistoryExpanded] = React.useState(false);

    const reversedComments = React.useMemo(() => (comments || []).slice().reverse(), [comments]);
    const latestComment = reversedComments[0];
    const olderComments = reversedComments.slice(1);

    const handleAddCommentClick = () => {
        if (newComment.trim() && selectedDate) {
            onAddComment(repId, newComment.trim(), selectedDate);
            setNewComment('');
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">総括コメント</h3>
            <div className="space-y-4">
                 <div className="text-sm text-gray-700 bg-gray-50 p-3 rounded-md border">
                    {!latestComment && <p className="text-xs text-gray-400 text-center py-4">コメントはありません。</p>}
                    {latestComment && (
                        <div className="group relative pb-1">
                            <div className="flex justify-between items-start">
                                <span className="font-semibold text-gray-500 text-xs block">{latestComment.date}</span>
                                {isAdminMode && (
                                    <button onClick={() => onDeleteComment(repId, latestComment.id)} className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity p-1">
                                        <TrashIcon />
                                    </button>
                                )}
                            </div>
                            <p className="whitespace-pre-wrap break-words">{latestComment.text}</p>
                        </div>
                    )}
                    {isHistoryExpanded && olderComments.map(c => (
                        <div key={c.id} className="group relative pt-2 mt-2 border-t">
                           <div className="flex justify-between items-start">
                              <span className="font-semibold text-gray-500 text-xs block">{c.date}</span>
                              {isAdminMode && (
                                  <button onClick={() => onDeleteComment(repId, c.id)} className="absolute top-2 right-0 opacity-0 group-hover:opacity-100 transition-opacity p-1">
                                      <TrashIcon />
                                  </button>
                              )}
                           </div>
                           <p className="whitespace-pre-wrap break-words">{c.text}</p>
                        </div>
                    ))}
                     {olderComments.length > 0 && (
                        <button onClick={() => setIsHistoryExpanded(!isHistoryExpanded)} className="text-xs text-blue-600 hover:underline mt-2">
                            {isHistoryExpanded ? '古い履歴を隠す' : `過去の履歴${olderComments.length}件を表示...`}
                        </button>
                    )}
                </div>
                {isAdminMode && (
                    <div className="border-t pt-4">
                        <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} className="w-full p-2 border rounded-md text-sm text-gray-600" />
                        <textarea placeholder="総括コメントを入力..." value={newComment} onChange={(e) => setNewComment(e.target.value)} className="w-full p-2 mt-2 border rounded-md text-sm text-gray-600" rows="3"></textarea>
                        <button onClick={handleAddCommentClick} className="mt-2 w-full px-4 py-2 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 disabled:opacity-50" disabled={!newComment.trim() || !selectedDate}>
                            総括コメントを追加
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};


const RepDetailView = ({ rep, items, progress, onStatusUpdate, onAddComment, onDeleteComment, onAddGeneralComment, onDeleteGeneralComment, onOpenFile, calculateProgress, getCompletedTasks, isAdminMode }) => {
    if (!rep) return <div className="text-center p-8 text-gray-500">担当者を選択してください。</div>;

    const repProgress = progress[rep.id] || {};

    const itemsByCategory = React.useMemo(() => items.reduce((acc, item) => {
        (acc[item.category] = acc[item.category] || []).push(item);
        return acc;
    }, {}), [items]);

    const categoryProgresses = React.useMemo(() => Object.entries(itemsByCategory).map(([category, itemsInCategory]) => {
        if (itemsInCategory.length === 0) return { category, percentage: 0 };
        const totalValue = itemsInCategory.reduce((acc, item) => acc + (STATUS_VALUE[repProgress[item.id]?.status || '未着手'] || 0), 0);
        return { category, percentage: (totalValue / itemsInCategory.length) * 100 };
    }), [itemsByCategory, repProgress]);

    return (
        <>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row items-center justify-start p-6 border-b mb-6 rounded-t-lg bg-gray-50 gap-x-8 gap-y-6">
                       <div className="flex items-center flex-shrink-0">
                           <CircularProgress percentage={calculateProgress(rep.id)} />
                           <div className="ml-6 text-left">
                               <h2 className="text-2xl font-bold text-gray-800">Gハウス営業マン達成度</h2>
                               <p className="text-gray-600">{getCompletedTasks(rep.id)} タスク完了</p>
                           </div>
                       </div>

                       <div className="flex-grow w-full border-t md:border-t-0 md:border-l border-gray-200 pt-6 md:pt-0 md:pl-8">
                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                               {categoryProgresses.map(({ category, percentage }) => (
                                   <CategoryProgressBar key={category} category={category} percentage={percentage} />
                               ))}
                           </div>
                       </div>
                </div>

                <GeneralCommentSection
                    comments={repProgress.generalComments}
                    onAddComment={onAddGeneralComment}
                    onDeleteComment={onDeleteGeneralComment}
                    repId={rep.id}
                    isAdminMode={isAdminMode}
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {items.map(item => (
                    <TrainingItemCard
                        key={item.id} item={item} repId={rep.id} progress={repProgress[item.id]}
                        onStatusUpdate={onStatusUpdate} onAddComment={onAddComment} onDeleteComment={onDeleteComment}
                        onOpenFile={onOpenFile} isAdminMode={isAdminMode}
                    />
                ))}
            </div>
        </>
    );
};


// Main App Component
function App() {
  const [salesReps, setSalesReps] = React.useState(initialSalesReps);
  const [trainingItems, setTrainingItems] = React.useState(initialTrainingItems);
  const [progress, setProgress] = React.useState(initialProgress);
  const [activeRepId, setActiveRepId] = React.useState(initialSalesReps.length > 0 ? initialSalesReps[0].id : null);
  const [isEditModalOpen, setIsEditModalOpen] = React.useState(false);
  const [editingItemId, setEditingItemId] = React.useState(null);
  const [toast, setToast] = React.useState({ message: '', type: 'success' });
  const [isAdminMode, setIsAdminMode] = React.useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = React.useState(false);

  const showToast = (message, type = 'success') => { setToast({ message, type }); };
  const dismissToast = () => { setToast({ message: '', type: 'success' }); };

  React.useEffect(() => {
    return () => { trainingItems.forEach(item => { if (item.documents) item.documents.forEach(doc => { if (doc.url.startsWith('blob:')) URL.revokeObjectURL(doc.url); }); }); };
  }, [trainingItems]);

  const calculateProgress = (repId) => { const repProgress = progress[repId] || {}; if (trainingItems.length === 0) return 0; const totalValue = trainingItems.reduce((acc, item) => acc + (STATUS_VALUE[repProgress[item.id]?.status || '未着手'] || 0), 0); return (totalValue / trainingItems.length) * 100; };
  const getCompletedTasks = (repId) => { const repProgress = progress[repId] || {}; const completedCount = trainingItems.filter(item => repProgress[item.id]?.status === '◎').length; return `${completedCount} / ${trainingItems.length}`; };
  const handleStatusUpdate = (repId, itemId, field, value) => { setProgress(prev => ({ ...prev, [repId]: { ...prev[repId], [itemId]: { ...(prev[repId]?.[itemId] || { status: '未着手', comments: [] }), [field]: value, }, }, })); };

  const handleAddComment = (repId, itemId, commentText, date) => {
    if (!commentText || !date) return;
    const newComment = { id: Date.now(), date, text: commentText };
    setProgress(prev => { const currentRepProgress = prev[repId] || {}; const currentItemProgress = currentRepProgress[itemId] || { status: '未着手', comments: [] }; return { ...prev, [repId]: { ...currentRepProgress, [itemId]: { ...currentItemProgress, comments: [...(currentItemProgress.comments || []), newComment] } } }; });
    showToast('コメントを追加しました。', 'success');
  };

  const handleDeleteComment = (repId, itemId, commentId) => {
    // Using a custom modal for confirmation would be better in a real app
    // but window.confirm is used for simplicity here.
    setProgress(prev => { const newProgress = JSON.parse(JSON.stringify(prev)); const comments = newProgress[repId]?.[itemId]?.comments; if (comments) { newProgress[repId][itemId].comments = comments.filter(c => c.id !== commentId); } return newProgress; });
    showToast('コメントを削除しました。');
  };

  const handleAddGeneralComment = (repId, commentText, date) => {
    if (!commentText || !date) return;
    const newComment = { id: Date.now(), date, text: commentText };
    setProgress(prev => {
        const currentRepProgress = prev[repId] || {};
        const generalComments = currentRepProgress.generalComments || [];
        return { ...prev, [repId]: { ...currentRepProgress, generalComments: [...generalComments, newComment] } };
    });
    showToast('総括コメントを追加しました。', 'success');
  };

  const handleDeleteGeneralComment = (repId, commentId) => {
    setProgress(prev => {
        const newProgress = JSON.parse(JSON.stringify(prev));
        const comments = newProgress[repId]?.generalComments;
        if (comments) {
            newProgress[repId].generalComments = comments.filter(c => c.id !== commentId);
        }
        return newProgress;
    });
    showToast('総括コメントを削除しました。');
  };

  const addSalesRep = (name) => { const newId = `rep${Date.now()}`; setSalesReps(prev => [...prev, { id: newId, name }]); setProgress(prev => ({...prev, [newId]: {}})); if (!activeRepId) setActiveRepId(newId); };
  const deleteSalesRep = (id) => { setSalesReps(prev => { const newReps = prev.filter(rep => rep.id !== id); if (id === activeRepId) setActiveRepId(newReps.length > 0 ? newReps[0].id : null); return newReps; }); setProgress(prev => { const newProgress = { ...prev }; delete newProgress[id]; return newProgress; }); };
  const addTrainingItem = (name, category) => { setTrainingItems(prev => [...prev, { id: `item${Date.now()}`, name, category, documents: [] }]); };
  const deleteTrainingItem = (id) => { setTrainingItems(prev => prev.filter(item => item.id !== id)); setProgress(prev => { const newProgress = { ...prev }; Object.keys(newProgress).forEach(repId => { if (newProgress[repId]) delete newProgress[repId][id]; }); return newProgress; }); };

  const handleOpenEditModal = (id) => { setEditingItemId(id); setIsEditModalOpen(true); };
  const handleCloseEditModal = () => { setIsEditModalOpen(false); setEditingItemId(null); };

  const handleSaveItemDocuments = (itemId, updatedDocuments) => { return new Promise((resolve) => { setTrainingItems(prevItems => prevItems.map(item => item.id === itemId ? { ...item, documents: updatedDocuments } : item)); resolve(); }); };

  const handleOpenFile = async (document) => { try { if (document.url && document.url.startsWith('data:')) { const blobUrl = dataUrlToBlobUrl(document.url); const win = window.open(blobUrl, '_blank'); if (win) { win.addEventListener('beforeunload', () => URL.revokeObjectURL(blobUrl)); return; } } const win2 = window.open('', '_blank'); if (!win2) { showToast('ポップアップがブロックされました。設定を確認してください。', 'error'); return; } win2.document.write('読み込み中…'); win2.document.close(); const url = document.url && document.url.startsWith('data:') ? document.url : await mockApi.getSignedUrl(document); let finalUrl = url; if (url.startsWith('data:')) { finalUrl = dataUrlToBlobUrl(url); win2.addEventListener('beforeunload', () => URL.revokeObjectURL(finalUrl)); } try { win2.location.replace(finalUrl); return; } catch (_e) { /* fallback */ } win2.document.open(); win2.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>${document.name}</title></head><body style="margin:0;height:100vh;background:#111;"><iframe src="${finalUrl}" width="100%" height="100%" style="border:none;"></iframe><p style="color:#fff;position:absolute;top:10px;left:10px;">表示されない場合は <a href="${finalUrl}" download="${document.name}" style="color:yellow;">こちらをクリック</a></p></body></html>`); win2.document.close(); } catch (e) { showToast(`ファイルを開けませんでした: ${e.message || '不明なエラー'}`, 'error'); } };
  const handleAdminToggle = () => { if (isAdminMode) { setIsAdminMode(false); showToast('閲覧モードに切り替えました。', 'success'); } else { setIsPasswordModalOpen(true); } };
  const handlePasswordSubmit = (password) => { if (password === 'house06') { setIsAdminMode(true); setIsPasswordModalOpen(false); showToast('管理者モードに切り替えました。', 'success'); } else { showToast('パスワードが違います。', 'error'); } };

  const activeRep = salesReps.find(rep => rep.id === activeRepId);
  const editingItem = trainingItems.find(item => item.id === editingItemId);

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <Toast message={toast.message} type={toast.type} onDismiss={dismissToast} />
      {isPasswordModalOpen && <PasswordModal onSubmit={handlePasswordSubmit} onClose={() => setIsPasswordModalOpen(false)} />}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">営業育成管理ダッシュボード</h1>
          <button onClick={handleAdminToggle} className={`px-3 py-1.5 text-sm font-semibold rounded-md transition-colors ${ isAdminMode ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300' }`} > {isAdminMode ? '閲覧モードに切替' : '管理者モード'} </button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {isAdminMode && isEditModalOpen && editingItem && ( <EditItemModal item={editingItem} onClose={handleCloseEditModal} onSave={handleSaveItemDocuments} showToast={showToast} /> )}
        <div className="bg-white p-4 rounded-lg shadow-md mb-6 text-sm text-gray-700 flex flex-wrap gap-x-6 gap-y-2 items-center">
            <h3 className="font-bold w-full mb-2 md:w-auto md:mb-0">【凡例】</h3>
            <span><strong className="text-green-500 text-base">◎</strong> : 部門長のロープレ合格済</span>
            <span><strong className="text-yellow-500 text-base">△</strong> : ロープレができる状態だが不合格</span>
            <span><strong className="text-red-500 text-base">✖</strong> : ロープレが出来ず知識が不足している状態</span>
        </div>

        {isAdminMode && ( <AdminPanel reps={salesReps} items={trainingItems} onAddRep={addSalesRep} onDeleteRep={deleteSalesRep} onAddItem={addTrainingItem} onDeleteItem={deleteTrainingItem} onOpenEditModal={handleOpenEditModal} /> )}

        <div className="mb-6 border-b border-gray-200">
            <nav className="-mb-px flex space-x-6 overflow-x-auto" aria-label="Tabs">
                {salesReps.map((rep) => ( <button key={rep.id} onClick={() => setActiveRepId(rep.id)} className={`${ activeRepId === rep.id ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300' } whitespace-nowrap py-4 px-3 border-b-2 font-medium text-sm`}> {rep.name} </button> ))}
            </nav>
        </div>
        <RepDetailView rep={activeRep} items={trainingItems} progress={progress} onStatusUpdate={handleStatusUpdate} onAddComment={handleAddComment} onDeleteComment={handleDeleteComment} onAddGeneralComment={handleAddGeneralComment} onDeleteGeneralComment={onDeleteGeneralComment} onOpenFile={handleOpenFile} calculateProgress={calculateProgress} getCompletedTasks={getCompletedTasks} isAdminMode={isAdminMode} />
      </main>
    </div>
  );
}

export default App;