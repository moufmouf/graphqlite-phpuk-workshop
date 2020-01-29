<?php


namespace App\Services;


use App\Entity\Product;

class VatService implements VatServiceInterface
{
    public function getVat(Product $product): float
    {
        return round($product->getPrice() * 0.2, 2);
    }
}
