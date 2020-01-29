<?php

namespace App\Entity;

interface VatServiceInterface
{
    public function getVat(Product $product): float;
}
