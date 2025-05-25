"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Plus,
  Edit,
  Trash2,
  Package,
  TrendingUp,
  DollarSign,
  ShoppingCart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
// import { useToast } from "@/hooks/use-toast"

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  inventory: number;
  featured: boolean;
}

const FAKE_STORE_ID = 1;
export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>([]);
  //   const { toast } = useToast()

  useEffect(() => {
    const savedProducts = localStorage.getItem("products");
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    }
  }, []);

  const deleteProduct = (productId: string) => {
    const updatedProducts = products.filter((p) => p.id !== productId);
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    // toast({
    //   title: "Product Deleted",
    //   description: "Product has been successfully deleted.",
    // })
  };

  const toggleFeatured = (productId: string) => {
    const updatedProducts = products.map((p) =>
      p.id === productId ? { ...p, featured: !p.featured } : p
    );
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  const totalProducts = products.length;
  const totalInventory = products.reduce((sum, p) => sum + p.inventory, 0);
  const totalValue = products.reduce(
    (sum, p) => sum + p.price * p.inventory,
    0
  );
  const lowStockProducts = products.filter((p) => p.inventory < 10).length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Header */}
        <div className="mb-8">
          <div className="flex justify-between">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Admin Dashboard
            </h1>

            <Link href={`/store/${FAKE_STORE_ID}/admin/add-product`}>
              <Button>
                <Plus className="size-4 mr-1" />
                Add Product
              </Button>
            </Link>
          </div>
        <p className="text-gray-600">Manage your products and inventory</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Products
              </CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalProducts}</div>
              <p className="text-xs text-muted-foreground">
                Active products in store
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Inventory
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalInventory}</div>
              <p className="text-xs text-muted-foreground">Items in stock</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Inventory Value
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalValue.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground">
                Total inventory value
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Low Stock Alert
              </CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">
                {lowStockProducts}
              </div>
              <p className="text-xs text-muted-foreground">
                Products below 10 units
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Products Table */}
        <Card>
          <CardHeader>
            <CardTitle>Product Management</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[80px]">Image</TableHead>
                  <TableHead>Product</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Inventory</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={60}
                        height={60}
                        className="rounded-md object-cover"
                      />
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{product.name}</div>
                        <div className="text-sm text-gray-500 truncate max-w-[200px]">
                          {product.description}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">{product.category}</Badge>
                    </TableCell>
                    <TableCell className="font-medium">
                      ${product.price.toFixed(2)}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <span
                          className={
                            product.inventory < 10
                              ? "text-orange-600 font-medium"
                              : ""
                          }
                        >
                          {product.inventory}
                        </span>
                        {product.inventory < 10 && (
                          <Badge
                            variant="outline"
                            className="text-orange-600 border-orange-600"
                          >
                            Low
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        {product.featured && (
                          <Badge className="bg-blue-100 text-blue-800">
                            Featured
                          </Badge>
                        )}
                        {product.inventory === 0 ? (
                          <Badge variant="destructive">Out of Stock</Badge>
                        ) : (
                          <Badge
                            variant="outline"
                            className="text-green-600 border-green-600"
                          >
                            In Stock
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => toggleFeatured(product.id)}
                        >
                          {product.featured ? "Unfeature" : "Feature"}
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => deleteProduct(product.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            {products.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500 mb-4">
                  No products found. Start by adding your first product.
                </p>
                <Link href={`/store/${FAKE_STORE_ID}/admin/add-product`}>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Your First Product
                  </Button>
                </Link>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
