export default function RecentSyncsTable({ runs }: { runs: any[] }) {
  if (!runs || runs.length === 0) return <p className="text-gray-500">No recent runs.</p>;

  return (
    <div className="overflow-x-auto border rounded-lg bg-white shadow-sm">
      <table className="min-w-full text-sm text-left">
        <thead className="bg-gray-50 text-gray-700 border-b">
          <tr>
            <th className="px-6 py-3">Store</th>
            <th className="px-6 py-3">Date</th>
            <th className="px-6 py-3 text-right">Received</th>
            <th className="px-6 py-3 text-right">OK</th>
            <th className="px-6 py-3 text-right">Errors</th>
            <th className="px-6 py-3">Duration</th>
            <th className="px-6 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {runs.map(run => {
            let statusColor = 'text-green-600';
            if (run.status === 'FAILED') statusColor = 'text-red-600';
            if (run.status === 'PARTIAL_SUCCESS') statusColor = 'text-yellow-600';
            
            return (
              <tr key={run.id} className="border-b last:border-0 hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">{run.store?.name || run.storeId}</td>
                <td className="px-6 py-4">{new Date(run.startedAt).toLocaleString()}</td>
                <td className="px-6 py-4 text-right">{run.itemsReceived}</td>
                <td className="px-6 py-4 text-right">{run.itemsProcessed}</td>
                <td className="px-6 py-4 text-right text-red-500 font-semibold">{run.itemsFailed}</td>
                <td className="px-6 py-4">{run.durationMs ? `${(run.durationMs / 1000).toFixed(1)}s` : '-'}</td>
                <td className={`px-6 py-4 font-bold ${statusColor}`}>{run.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
