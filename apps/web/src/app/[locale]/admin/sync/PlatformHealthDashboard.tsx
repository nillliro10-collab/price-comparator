'use client';
import { useEffect, useState } from 'react';

export default function PlatformHealthDashboard() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch('/api/admin/platform-health')
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return <div className="p-4 border rounded-md animate-pulse h-48 bg-gray-50"></div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {/* STORES */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h3 className="text-gray-500 text-sm font-semibold tracking-wider mb-4 uppercase">Stores</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Active</span>
            <span className="font-bold">{data.platform.activeStores}</span>
          </div>
          <div className="flex justify-between text-green-600">
            <span>Healthy</span>
            <span className="font-bold">{data.platform.healthyStores}</span>
          </div>
          <div className="flex justify-between text-amber-600">
            <span>Stale</span>
            <span className="font-bold">{data.platform.staleStores}</span>
          </div>
        </div>
      </div>

      {/* CATALOG */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h3 className="text-gray-500 text-sm font-semibold tracking-wider mb-4 uppercase">Catalog</h3>
        <div className="space-y-4">
          <div>
            <div className="text-sm text-gray-500">Products</div>
            <div className="text-2xl font-bold">{data.platform.products.toLocaleString()}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Offers</div>
            <div className="text-2xl font-bold">{data.platform.offers.toLocaleString()}</div>
          </div>
        </div>
      </div>

      {/* LAST 24H SYNCS */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h3 className="text-gray-500 text-sm font-semibold tracking-wider mb-4 uppercase">Last 24h Syncs</h3>
        <div className="space-y-2">
          <div className="flex justify-between border-b pb-2 mb-2">
            <span>Total Syncs</span>
            <span className="font-bold">{data.last24h.total}</span>
          </div>
          <div className="flex justify-between text-green-600">
            <span>Success</span>
            <span className="font-bold">{data.last24h.success}</span>
          </div>
          <div className="flex justify-between text-amber-500">
            <span>Partial</span>
            <span className="font-bold">{data.last24h.partial}</span>
          </div>
          <div className="flex justify-between text-red-600">
            <span>Failed</span>
            <span className="font-bold">{data.last24h.failed}</span>
          </div>
        </div>
      </div>

      {/* DATA QUALITY */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h3 className="text-gray-500 text-sm font-semibold tracking-wider mb-4 uppercase">Data Quality</h3>
        <div className="space-y-2">
          <div className="flex justify-between border-b pb-2 mb-2">
            <span className="font-semibold">Overall Quality</span>
            <span className={`font-bold ${parseFloat(data.dataQuality.overall) > 95 ? 'text-green-600' : 'text-amber-500'}`}>
              {data.dataQuality.overall}%
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Missing SKU</span>
            <span className="font-mono">{data.dataQuality.missingSkuRate}%</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Invalid Prices</span>
            <span className="font-mono">{data.dataQuality.invalidPriceRate}%</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Out of Stock</span>
            <span className="font-mono">{data.dataQuality.outOfStockRate}%</span>
          </div>
          <div className="flex justify-between text-sm pt-2 border-t mt-2">
            <span className="font-semibold text-gray-700">Match Confidence</span>
            <span className="font-bold font-mono text-blue-600">{data.dataQuality.matchingConfidence}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
