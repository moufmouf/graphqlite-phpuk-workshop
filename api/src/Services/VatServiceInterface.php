<?php

namespace App\Services;

use App\Entity\Product;

interface VatServiceInterface
{
    public function getVat(Product $product): float;
}
