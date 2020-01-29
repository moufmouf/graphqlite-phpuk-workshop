<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use TheCodingMachine\GraphQLite\Annotations\Field;
use TheCodingMachine\GraphQLite\Annotations\Type;

/**
 * @ORM\Entity(repositoryClass="App\Repository\OptionRepository")
 * @ORM\Table(name="product_option")
 * @Type()
 */
class Option
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private int $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private string $name;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private ?float $price;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Product", inversedBy="options")
     * @ORM\JoinColumn(nullable=false)
     */
    private ?Product $product;

    public function __construct(string $name, ?float $price, ?Product $product = null)
    {
        $this->name = $name;
        $this->price = $price;
        $this->product = $product;
    }

    /**
     * @Field()
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @Field()
     */
    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @Field()
     */
    public function getPrice(): ?float
    {
        return $this->price;
    }

    public function setPrice(?float $price): self
    {
        $this->price = $price;

        return $this;
    }

    /**
     * @Field()
     */
    public function getProduct(): ?Product
    {
        return $this->product;
    }

    public function setProduct(?Product $product): self
    {
        $this->product = $product;

        return $this;
    }
}
