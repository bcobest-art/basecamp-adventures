import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Search, Filter, Star, Truck } from "lucide-react";

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Sepatu Hiking Waterproof",
      brand: "Salomon",
      price: "2.450.000",
      originalPrice: "2.850.000",
      rating: 4.8,
      reviews: 127,
      image: "/placeholder.svg",
      badge: "Best Seller",
      inStock: true
    },
    {
      id: 2,
      name: "Jaket Gunung 3-Layer",
      brand: "Patagonia",
      price: "3.200.000",
      rating: 4.9,
      reviews: 89,
      image: "/placeholder.svg",
      badge: "New",
      inStock: true
    },
    {
      id: 3,
      name: "Tenda Ultralight 2P",
      brand: "MSR",
      price: "4.750.000",
      rating: 4.7,
      reviews: 156,
      image: "/placeholder.svg",
      badge: "Limited",
      inStock: false
    }
  ];

  const categories = [
    "Sepatu & Sandal",
    "Jaket & Apparel", 
    "Tas & Carrier",
    "Tenda & Shelter",
    "Sleeping System",
    "Peralatan Masak"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-forest text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Shop Outdoor Gear</h1>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Koleksi lengkap perlengkapan outdoor dari brand ternama dunia. 
            Garansi resmi dan harga terbaik.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Cari produk..." 
                className="pl-10 bg-white/90"
              />
            </div>
            <Button variant="secondary">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Button 
                key={index} 
                variant="outline" 
                className="hover:bg-primary hover:text-primary-foreground"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Produk Pilihan</h2>
            <p className="text-muted-foreground">{products.length} produk ditemukan</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-nature transition-all duration-300 group">
                <div className="aspect-square bg-muted relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                  {product.badge && (
                    <Badge 
                      className="absolute top-3 left-3"
                      variant={product.badge === "Best Seller" ? "default" : product.badge === "New" ? "secondary" : "destructive"}
                    >
                      {product.badge}
                    </Badge>
                  )}
                  <Button 
                    size="sm" 
                    className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    variant="secondary"
                  >
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </div>
                
                <CardHeader className="pb-2">
                  <CardDescription className="text-primary font-medium">{product.brand}</CardDescription>
                  <CardTitle className="text-lg leading-tight">{product.name}</CardTitle>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-nature-orange text-nature-orange" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">({product.reviews} ulasan)</span>
                  </div>
                </CardHeader>

                <CardContent className="pt-2">
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-primary">Rp {product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            Rp {product.originalPrice}
                          </span>
                        )}
                      </div>
                      {product.originalPrice && (
                        <Badge variant="destructive" className="text-xs">
                          Hemat Rp {(parseInt(product.originalPrice.replace(/\./g, '')) - parseInt(product.price.replace(/\./g, ''))).toLocaleString()}
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Truck className="h-4 w-4" />
                      <span>Gratis ongkir min. Rp 500.000</span>
                    </div>

                    <Button 
                      className="w-full bg-gradient-forest"
                      disabled={!product.inStock}
                    >
                      {product.inStock ? (
                        <>
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Tambah ke Keranjang
                        </>
                      ) : (
                        "Stok Habis"
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Muat Lebih Banyak Produk
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 bg-primary rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Truck className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Gratis Ongkir</h3>
              <p className="text-muted-foreground">Pembelian minimal Rp 500.000 gratis ongkos kirim ke seluruh Indonesia</p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-primary rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <ShoppingCart className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Garansi Resmi</h3>
              <p className="text-muted-foreground">Semua produk bergaransi resmi dari distributor dan importir terpercaya</p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-primary rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Kualitas Terjamin</h3>
              <p className="text-muted-foreground">Hanya menjual produk original dari brand outdoor ternama dunia</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Shop;