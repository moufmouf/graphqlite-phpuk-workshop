<?php

namespace App\Entity;

use App\Services\VatServiceInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use TheCodingMachine\GraphQLite\Annotations\Autowire;
use TheCodingMachine\GraphQLite\Annotations\Field;
use TheCodingMachine\GraphQLite\Annotations\Type;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ProductRepository")
 */
class Product
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank()
     */
    private string $name;

    /**
     * @ORM\Column(type="float", nullable=true)
     * @Assert\GreaterThanOrEqual(0)
     */
    private ?float $price;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private ?float $margin;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Company", inversedBy="products")
     * @ORM\JoinColumn(nullable=false)
     */
    private Company $company;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Option", mappedBy="product", orphanRemoval=true)
     */
    private $options;

    public function __construct(string $name, Company $company)
    {
        $this->name = $name;
        $this->company = $company;
        $this->options = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function getPrice(): ?float
    {
        return $this->price;
    }

    public function getMargin(): ?float
    {
        return $this->margin;
    }

    public function getCompany(): ?Company
    {
        return $this->company;
    }

    /**
     * @return Collection|Option[]
     */
    public function getOptions(): Collection
    {
        return $this->options;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function setPrice(?float $price): self
    {
        $this->price = $price;

        return $this;
    }

    public function setMargin(?float $margin): self
    {
        $this->margin = $margin;

        return $this;
    }

    public function setCompany(?Company $company): self
    {
        $this->company = $company;

        return $this;
    }

    public function addOption(Option $option): self
    {
        if (!$this->options->contains($option)) {
            $this->options[] = $option;
            $option->setProduct($this);
        }

        return $this;
    }

    public function removeOption(Option $option): self
    {
        if ($this->options->contains($option)) {
            $this->options->removeElement($option);
            // set the owning side to null (unless already changed)
            if ($option->getProduct() === $this) {
                $option->setProduct(null);
            }
        }

        return $this;
    }

//    /**
//     * @Field()
//     */
//    public function getVat(): float
//    {
//        return $this->price * 0.2;
//    }

//    /**
//     * @Field()
//     * @Autowire(for="$vatService")
//     */
//    public function getVat(VatServiceInterface $vatService): float
//    {
//        return $vatService->getVat($this);
//    }
}
