import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tent, Backpack, Compass, Calendar, Star } 
from "lucide-react";
import Rentalpic from "@/assets/tendaki2.jpg";
import SBpic from "@/assets/SB.jpg";
import Carierpic from "@/assets/carrier.jpg";
import Sptrekking from "@/assets/sptreeking.jpg";
import lamppic from "@/assets/lamp.jpg";
import komporpic from "@/assets/kompor.jpg";
import matraspic from "@/assets/matrass.jpg";
import cookingsetpic from "@/assets/cookingset.jpg";
import kursimejapic from "@/assets/kursimeja.jpg";


const Rental = () => {
  const categories = [
    { name: "Tenda & Shelter", icon: <Tent className="h-5 w-5" />, count: 15 },
    { name: "Tas & Carrier", icon: <Backpack className="h-5 w-5" />, count: 12 },
    { name: "Navigasi", icon: <Compass className="h-5 w-5" />, count: 8 },
  ];

  const featuredItems = [
    {
      id: 1,
      name: "Tenda Dome 4 Orang",
      brand: "Tendaki Borneo Double Layer",
      price: "50.000",
      period: "per hari",
      rating: 4.8,
      image: Rentalpic,
      features: ["Waterproof 3000mm", "Setup 5 menit", "Ventilasi double"],
      available: true
    },
    {
      id: 2,
      name: "Sleeping Bag -1°C until 5°C",
      brand: "Polar",
      price: "15.000",
      period: "per hari",
      rating: 4.9,
      image: SBpic,
      features: ["Down filling", "Comfort -5°C", "Ultra ringan"],
      available: true
    },
    {
      id: 3,
      name: "Carrier 60L",
      brand: "All brand",
      price: "30.000",
      period: "per hari",
      rating: 4.7,
      image: Carierpic,
      features: ["Sistem bantalan", "Rain cover", "Multiple pockets"],
      available: true
    },
    {
      id: 4,
      name: "Sepatu Treeking",
      brand: "All brand",
      price: "30.000",
      period: "per hari",
      rating: 4.7,
      image: Sptrekking,
      features: ["Sistem bantalan", "Rain cover", "Multiple pockets"],
      available: true
    },
    {
      id: 5,
      name: "Lamp",
      brand: "All brand",
      price: "10.000",
      period: "per hari",
      rating: 4.7,
      image: lamppic,
      features: ["LED", "ringan",],
      available: true
    },
    {
      id: 6,
      name: "Kompor portable",
      brand: "All brand",
      price: "10.000",
      period: "per hari",
      rating: 4.9,
      image: komporpic,
      features: ["portable", "Ringan"],
      available: true
    },
    {
      id: 7,
      name: "Matras Spons",
      brand: "All brand",
      price: "5.000",
      period: "per hari",
      rating: 4.7,
      image: matraspic,
      features: ["Empuk", "ringan", "nyaman"],
      available: true
    },
    {
      id: 8,
      name: "Cooking set",
      brand: "Alat masak",
      price: "15.000",
      period: "per hari",
      rating: 4.7,
      image: cookingsetpic,
      features: ["Anti lengket"],
      available: true
    },
    {
      id: 9,
      name: "Kursi meja portable",
      brand: "All brand",
      price: "50.000",
      period: "per hari",
      rating: 4.9,
      image: kursimejapic,
      features: ["portable", "Ringan"],
      available: true
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-mountain text-primary-foreground" 
        style={{ backgroundImage: "url('/assets/tent.jpg')" }} 
      >
        <div className="container mx-auto px-4 text-center">
        
          <h1 className="text-5xl font-bold mb-6 text-white drop-shadow-[2px_2px_2px_rgba(7,6,2,2.6)]">
          Rental Gear Outdoor
        </h1>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto text-white drop-shadow-[1px_2px_2px_rgba(7,6,2,2.6)]">
            Sewa perlengkapan outdoor berkualitas tinggi dengan harga terjangkau. 
            Semua gear telah diperiksa dan dalam kondisi prima.
          </p>
          <a href="https://wa.me/6285781160699?text=Halo...Haii...Admin%20%0ASayaa%20butuh%20bantuan%20ni...%0ANama%20:%0AProduk%20:%0A(pilih%20salah%20satu)%0A1.Rental,%202.Laundry,%203.Shop,%204.Repair,%205.Event%20%0ATanggal%20:%0AKeterangan%20:" 
            target="_blank" 
            rel="noopener noreferrer" > 
            <Button size="lg" 
              variant="secondary" 
              className="text-lg px-8 py-4"> 
              <Calendar 
                className="mr-2 h-5 w-5" /> 
                Booking Sekarang 
                </Button>
          </a>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Kategori Produk</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-nature transition-all duration-300 cursor-pointer">
                <CardHeader className="text-center">
                  <div className="mx-auto p-3 bg-primary/10 rounded-full mb-4">
                    {category.icon}
                  </div>
                  <CardTitle>{category.name}</CardTitle>
                  <CardDescription>{category.count} produk tersedia</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Produk Unggulan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-nature transition-all duration-300">
                <div className="aspect-video bg-muted relative">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  {!item.available && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <Badge variant="destructive">Tidak Tersedia</Badge>
                    </div>
                  )}
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <CardDescription>{item.brand}</CardDescription>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-nature-orange text-nature-orange" />
                      <span className="text-sm font-medium">{item.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <ul className="space-y-1">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-primary">Rp {item.price}</span>
                        <span className="text-sm text-muted-foreground ml-1">{item.period}</span>
                      </div>
                      <Button 
                        disabled={!item.available}
                        className={item.available ? "bg-gradient-forest" : ""}
                      >
                        {item.available ? "Sewa Sekarang" : "Tidak Tersedia"}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Syarat & Ketentuan Rental</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-foreground text-xs font-bold">1</span>
                  </div>
                  <p className="text-muted-foreground">Deposit 50% dari nilai barang sebagai jaminan & identitas asli KTP atau SIM</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-foreground text-xs font-bold">2</span>
                  </div>
                  <p className="text-muted-foreground">Minimal rental 2 hari, maksimal 8 hari, contoh sewa tanggal 1,2,3 hitung 2 hari saja</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-foreground text-xs font-bold">3</span>
                  </div>
                  <p className="text-muted-foreground">Jika dikembalikan kondisi rusak ada penambahan biaya perbaikan</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-foreground text-xs font-bold">4</span>
                  </div>
                  <p className="text-muted-foreground">Gratis antar-jemput dalam radius 10km</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-hero text-primary-foreground p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Paket Hemat</h3>
              <p className="mb-4">Rental 5 hari atau lebih, dapatkan diskon 20%!</p>
              <ul className="space-y-2 mb-6">
                <li>✓ Konsultasi gratis pemilihan gear</li>
                <li>✓ Tutorial penggunaan</li>
                <li>✓ Antar jemput gratis dalam radius 10km</li>
                <li>✓ Cleaning service</li>
              </ul>
              <a href="https://wa.me/6285781160699?text=Halo...Haii...Admin%20%0ASayaa%20Tanya%20paket%20Rental%20ni...%0ANama%20:%0AProduk%20:%0A1.Rental%0ATanggal%20:%0AKeterangan%20:Paket%20Hemat%20ada%20apa%20saja" 
                target="_blank" 
                rel="noopener noreferrer" >              
                <Button variant="secondary" size="lg" className="w-full">
                Tanya Paket Hemat
              </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Rental;