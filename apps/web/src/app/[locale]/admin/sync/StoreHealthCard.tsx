import { useState } from 'react';

export default function StoreHealthCard({ store, onSyncTriggered }: { store: any, onSyncTriggered: () => void }) {
  const [syncing, setSyncing] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const lastRun = store.syncRuns?.[0];
  const lastSyncDate = store.lastSuccessfulSyncAt ? new Date(store.lastSuccessfulSyncAt) : null;
  
  // Health Status Logic
  let health = '🟢 Healthy';
  let healthColor = 'text-green-600 bg-green-100';
  
  if (lastRun?.status === 'FAILED') {
    health = '🔴 Error';
    healthColor = 'text-red-600 bg-red-100';
  } else if (lastSyncDate) {
    const minutesSince = (Date.now() - lastSyncDate.getTime()) / 60000;
    if (minutesSince > store.syncInterval * 1.5) {
      health = '🟡 Stale';
      healthColor = 'text-yellow-600 bg-yellow-100';
    }
  }

  const handleSync = async () => {
    setSyncing(true);
    setErrorMsg('');
    try {
      const res = await fetch('/api/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ storeId: store.id })
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || 'Sync Failed');
      }
      onSyncTriggered();
    } catch (e: any) {
      setErrorMsg(e.message);
    } finally {
      setSyncing(false);
    }
  };

  return (
    <div className="border rounded-xl p-5 shadow-sm bg-white space-y-4">
      <div className="flex justify-between items-center border-b pb-3">
        <h3 className="font-bold text-lg">{store.name}</h3>
        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${healthColor}`}>
          {health}
        </span>
      </div>
      
      <div className="text-sm space-y-2">
        <p><span className="text-gray-500">Last successful:</span> {lastSyncDate ? lastSyncDate.toLocaleString() : 'Never'}</p>
        <p><span className="text-gray-500">Interval:</span> Every {store.syncInterval / 60} hours</p>
      </div>

      {lastRun && (
        <div className="bg-gray-50 p-3 rounded-lg text-sm border">
          <p className="font-semibold text-gray-700 mb-1">Latest Run Stats</p>
          <div className="grid grid-cols-2 gap-2 text-gray-600">
            <div>Received: {lastRun.itemsReceived}</div>
            <div>Updated: {lastRun.itemsUpdated}</div>
            <div>Created: {lastRun.itemsCreated}</div>
            <div className="text-red-500">Failed: {lastRun.itemsFailed}</div>
          </div>
        </div>
      )}

      {errorMsg && <p className="text-red-500 text-xs">{errorMsg}</p>}

      <div className="pt-2">
        <button 
          onClick={handleSync}
          disabled={syncing || lastRun?.status === 'RUNNING'}
          className="w-full bg-black text-white rounded-lg py-2 text-sm font-semibold disabled:bg-gray-400 hover:bg-gray-800 transition"
        >
          {syncing || lastRun?.status === 'RUNNING' ? 'Syncing in progress...' : 'Run Sync Now'}
        </button>
      </div>
    </div>
  );
}
