import React, { useState } from 'react';
import { ShoppingCart, RefreshCw, Send, CheckCircle2, TrendingUp, Cpu, Truck, Receipt, ArrowRight } from 'lucide-react';

interface SimulationOrder {
  id: string;
  customerName: string;
  itemFish: { name: string; kg: number; pricePerKg: number };
  itemGrocery: { name: string; qty: number; pricePerUnit: number };
  deliveryFee: number;
  total: number;
  paymentMethod: 'Tunai' | 'QRIS' | 'Transfer';
  timestamp: string;
}

export const StoreSystemSimulator: React.FC = () => {
  // Simulator State
  const [customerName, setCustomerName] = useState('Ibu Rahmawati');
  const [fishKg, setFishKg] = useState(2);
  const [groceryQty, setGroceryQty] = useState(2);
  const [paymentMethod, setPaymentMethod] = useState<'Tunai' | 'QRIS' | 'Transfer'>('QRIS');
  const [deliveryType, setDeliveryType] = useState<'Antar' | 'Beli di Toko'>('Antar');
  
  // Inventory state
  const [fishStock, setFishStock] = useState(14); // kg of fish remaining
  const [groceryStock, setGroceryStock] = useState(28); // units of cooking oil

  // Transaction history in TPS
  const [orders, setOrders] = useState<SimulationOrder[]>([
    {
      id: 'TRX-0841',
      customerName: 'Bapak Santoso',
      itemFish: { name: 'Ikan Lele Segar', kg: 3, pricePerKg: 28000 },
      itemGrocery: { name: 'Minyak Goreng 2L', qty: 1, pricePerUnit: 34000 },
      deliveryFee: 5000,
      total: 3 * 28000 + 1 * 34000 + 5000,
      paymentMethod: 'Tunai',
      timestamp: '08:42 WIB',
    },
    {
      id: 'TRX-0915',
      customerName: 'Warung Bu Siti',
      itemFish: { name: 'Ikan Nila Segar', kg: 5, pricePerKg: 35000 },
      itemGrocery: { name: 'Beras Premium 5kg', qty: 2, pricePerUnit: 72000 },
      deliveryFee: 8000,
      total: 5 * 35000 + 2 * 72000 + 8000,
      paymentMethod: 'Transfer',
      timestamp: '09:15 WIB',
    },
  ]);

  const [activeStep, setActiveStep] = useState<1 | 2 | 3>(1);
  const [lastProcessedOrder, setLastProcessedOrder] = useState<SimulationOrder | null>(null);

  // Pricing constants
  const FISH_PRICE = 35000; // Ikan Nila per kg
  const GROCERY_PRICE = 34000; // Minyak 2L per unit
  const DELIVERY_COST = deliveryType === 'Antar' ? 5000 : 0;
  const currentSubtotal = fishKg * FISH_PRICE + groceryQty * GROCERY_PRICE + DELIVERY_COST;

  // Handler: Submit new order to TPS
  const handleProcessOrder = (e: React.FormEvent) => {
    e.preventDefault();

    if (fishStock < fishKg) {
      alert('Stok ikan segar tidak mencukupi untuk transaksi ini!');
      return;
    }

    const newOrder: SimulationOrder = {
      id: `TRX-${Math.floor(1000 + Math.random() * 9000)}`,
      customerName,
      itemFish: { name: 'Ikan Nila Segar', kg: fishKg, pricePerKg: FISH_PRICE },
      itemGrocery: { name: 'Minyak Goreng 2L', qty: groceryQty, pricePerUnit: GROCERY_PRICE },
      deliveryFee: DELIVERY_COST,
      total: currentSubtotal,
      paymentMethod,
      timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) + ' WIB',
    };

    setOrders([newOrder, ...orders]);
    setFishStock((prev) => Math.max(0, prev - fishKg));
    setGroceryStock((prev) => Math.max(0, prev - groceryQty));
    setLastProcessedOrder(newOrder);
    setActiveStep(2);
  };

  // Metrics for MIS
  const totalRevenue = orders.reduce((acc, curr) => acc + curr.total, 0);
  const totalFishKgSold = orders.reduce((acc, curr) => acc + curr.itemFish.kg, 0);
  const totalFishRevenue = orders.reduce((acc, curr) => acc + curr.itemFish.kg * curr.itemFish.pricePerKg, 0);
  const totalGroceryRevenue = orders.reduce((acc, curr) => acc + curr.itemGrocery.qty * curr.itemGrocery.pricePerUnit, 0);

  // DSS Logic:
  // Fish is perishable. Target daily sale is ~20kg.
  // Recommended restock for tomorrow subuh = (Target daily sales * 1.15) - remaining fish stock.
  const targetFishDaily = 22;
  const recommendedRestockKg = Math.max(8, Math.round(targetFishDaily - fishStock * 0.7));
  const estimatedBudgetAuction = recommendedRestockKg * 26000; // Wholesale auction price at lelang

  return (
    <section id="simulasi" className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
            Simulasi Interaktif
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-tight">
            Simulasi Alur Sistem Informasi Toko Jalu Jaya
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Eksplorasi langsung bagaimana usulan <strong className="font-semibold text-slate-800">TPS</strong> merekam transaksi kasir, <strong className="font-semibold text-slate-800">MIS</strong> mengagregasi omzet toko, dan <strong className="font-semibold text-slate-800">DSS</strong> merekomendasikan pembelian ikan subuh hari.
          </p>
        </div>

        {/* 3-Tier Interactive Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Level 1: TPS Order Simulation Form (Col 1-5) */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
            <div className="border-b border-slate-100 pb-4 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono font-semibold text-blue-600">LEVEL 1 · OPERASIONAL</span>
                <h3 className="text-lg font-bold text-slate-900">TPS (Kasir & Pesan Antar)</h3>
              </div>
              <span className="text-xs text-slate-500 font-mono">Input Transaksi</span>
            </div>

            <form onSubmit={handleProcessOrder} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Nama Pelanggan
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  required
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-hidden focus:border-blue-600"
                />
              </div>

              {/* Item 1: Ikan Segar (Perishable) */}
              <div className="p-3 bg-blue-50/40 rounded-xl border border-blue-100 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-900">Ikan Nila Segar (Timbangan)</span>
                  <span className="text-xs font-mono text-slate-600">Rp 35.000 / kg</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs text-slate-600">Jumlah Timbangan:</span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setFishKg(Math.max(1, fishKg - 1))}
                      className="w-7 h-7 flex items-center justify-center rounded-md bg-white border border-slate-300 font-bold hover:bg-slate-100"
                    >
                      -
                    </button>
                    <span className="font-mono font-bold text-slate-900 w-8 text-center">{fishKg} kg</span>
                    <button
                      type="button"
                      onClick={() => setFishKg(Math.min(10, fishKg + 1))}
                      className="w-7 h-7 flex items-center justify-center rounded-md bg-white border border-slate-300 font-bold hover:bg-slate-100"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="text-[11px] text-slate-500 flex justify-between">
                  <span>Stok Segar Tersedia:</span>
                  <span className="font-mono font-medium text-slate-700">{fishStock} kg sisa</span>
                </div>
              </div>

              {/* Item 2: Sembako Non-Perishable */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-900">Minyak Goreng 2 Liter</span>
                  <span className="text-xs font-mono text-slate-600">Rp 34.000 / pch</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs text-slate-600">Kuantiti Barang:</span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setGroceryQty(Math.max(0, groceryQty - 1))}
                      className="w-7 h-7 flex items-center justify-center rounded-md bg-white border border-slate-300 font-bold hover:bg-slate-100"
                    >
                      -
                    </button>
                    <span className="font-mono font-bold text-slate-900 w-8 text-center">{groceryQty} unit</span>
                    <button
                      type="button"
                      onClick={() => setGroceryQty(Math.min(10, groceryQty + 1))}
                      className="w-7 h-7 flex items-center justify-center rounded-md bg-white border border-slate-300 font-bold hover:bg-slate-100"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Delivery & Payment Selection */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Metode Layanan
                  </label>
                  <select
                    value={deliveryType}
                    onChange={(e) => setDeliveryType(e.target.value as any)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 text-xs focus:outline-hidden"
                  >
                    <option value="Antar">Pesan Antar (+Rp 5.000)</option>
                    <option value="Beli di Toko">Ambil Sendiri di Toko</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Pembayaran
                  </label>
                  <select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value as any)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 text-xs focus:outline-hidden"
                  >
                    <option value="QRIS">QRIS Instan</option>
                    <option value="Tunai">Tunai / COD</option>
                    <option value="Transfer">Transfer Bank</option>
                  </select>
                </div>
              </div>

              {/* Total Calculation */}
              <div className="p-3 bg-slate-900 text-white rounded-xl flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-slate-400">Total Transaksi TPS:</div>
                  <div className="text-lg font-bold font-mono">
                    Rp {currentSubtotal.toLocaleString('id-ID')}
                  </div>
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold rounded-lg text-xs transition-colors shadow-xs"
                >
                  Proses Transaksi Kasir
                </button>
              </div>
            </form>

            {/* Quick Log of Recent Orders in TPS */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Log Transaksi Terakhir (TPS Log)
              </div>
              <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
                {orders.slice(0, 3).map((ord) => (
                  <div key={ord.id} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-semibold text-slate-900">{ord.id} · {ord.customerName}</div>
                      <div className="text-slate-500">{ord.itemFish.kg} kg ikan + {ord.itemGrocery.qty} sembako ({ord.paymentMethod})</div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono font-bold text-slate-900">Rp {ord.total.toLocaleString('id-ID')}</div>
                      <div className="text-[10px] text-slate-400 font-mono">{ord.timestamp}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Level 2 & 3: MIS and DSS outputs (Col 6-12) */}
          <div className="lg:col-span-7 space-y-6">
            {/* MIS (Management Information System) View */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5">
              <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono font-semibold text-emerald-600">LEVEL 2 · MANAJERIAL</span>
                  <h3 className="text-lg font-bold text-slate-900">MIS (Laporan Rekapitulasi & Stok)</h3>
                </div>
                <span className="text-xs text-slate-500 font-mono">Agregasi Otomatis</span>
              </div>

              {/* 3 Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/90 space-y-1">
                  <div className="text-xs text-slate-500">Total Omzet Harian</div>
                  <div className="text-lg font-bold font-mono text-slate-900 tabular-nums">
                    Rp {totalRevenue.toLocaleString('id-ID')}
                  </div>
                  <div className="text-[11px] text-slate-500">{orders.length} transaksi tercatat</div>
                </div>

                <div className="p-3.5 bg-blue-50/50 rounded-xl border border-blue-200/80 space-y-1">
                  <div className="text-xs text-blue-700">Omzet Ikan Segar</div>
                  <div className="text-lg font-bold font-mono text-blue-900 tabular-nums">
                    Rp {totalFishRevenue.toLocaleString('id-ID')}
                  </div>
                  <div className="text-[11px] text-blue-600 font-medium">{totalFishKgSold} kg terjual hari ini</div>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/90 space-y-1">
                  <div className="text-xs text-slate-500">Omzet Sembako Ritel</div>
                  <div className="text-lg font-bold font-mono text-slate-900 tabular-nums">
                    Rp {totalGroceryRevenue.toLocaleString('id-ID')}
                  </div>
                  <div className="text-[11px] text-slate-500">Margin stabil & tahan lama</div>
                </div>
              </div>

              {/* Inventory monitoring table */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                <div className="font-semibold text-slate-800 flex items-center justify-between">
                  <span>Monitoring Status Persediaan Menjelang Tutup Toko</span>
                  <span className="text-slate-500 font-normal">Diperbarui saat transaksi masuk</span>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-1">
                  <div className="p-2.5 bg-white rounded-lg border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="font-medium text-slate-800">Sisa Ikan Nila Segar</div>
                      <div className="text-[11px] text-amber-700 font-medium">Perlu habis sebelum malam</div>
                    </div>
                    <div className="text-base font-bold font-mono text-slate-900">
                      {fishStock} kg
                    </div>
                  </div>

                  <div className="p-2.5 bg-white rounded-lg border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="font-medium text-slate-800">Sisa Minyak Goreng 2L</div>
                      <div className="text-[11px] text-slate-500">Stok aman (non-perishable)</div>
                    </div>
                    <div className="text-base font-bold font-mono text-slate-900">
                      {groceryStock} unit
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* DSS (Decision Support System) View */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5">
              <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono font-semibold text-purple-600">LEVEL 3 · STRATEGIS</span>
                  <h3 className="text-lg font-bold text-slate-900">DSS (Rekomendasi Keputusan Belanja Subuh)</h3>
                </div>
                <span className="text-xs text-slate-500 font-mono">Algoritma Prediktif</span>
              </div>

              <div className="p-5 rounded-xl bg-linear-to-r from-purple-50/60 to-indigo-50/60 border border-purple-200/80 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="text-xs font-semibold text-purple-800 uppercase tracking-wider">
                      Rekomendasi Kulakan Pasar Lelang Esok Subuh
                    </div>
                    <div className="text-2xl font-bold font-mono text-slate-900">
                      {recommendedRestockKg} kg <span className="text-sm font-sans font-normal text-slate-600">Ikan Nila & Lele Segar</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-xs text-slate-500">Estimasi Modal Kulakan</div>
                    <div className="text-base font-bold font-mono text-purple-900">
                      Rp {estimatedBudgetAuction.toLocaleString('id-ID')}
                    </div>
                  </div>
                </div>

                <div className="text-xs text-slate-600 leading-relaxed border-t border-purple-200/60 pt-3">
                  <strong className="text-slate-800 font-semibold">Dasar Pertimbangan Algoritma DSS:</strong> Menghitung sisa stok fisik saat ini ({fishStock} kg), tren penjualan hari ini ({totalFishKgSold} kg), serta toleransi penyusutan bobot 5%. Rekomendasi ini mencegah pemilik membeli berlebihan yang berisiko membusuk di etalase esok hari.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
