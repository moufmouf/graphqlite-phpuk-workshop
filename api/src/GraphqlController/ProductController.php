<?php


namespace App\GraphqlController;


use App\Entity\Option;
use App\Entity\Product;
use App\Repository\CompanyRepository;
use App\Repository\ProductRepository;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use TheCodingMachine\GraphQLite\Annotations\Factory;
use TheCodingMachine\GraphQLite\Annotations\Mutation;
use TheCodingMachine\GraphQLite\Annotations\Query;
use TheCodingMachine\GraphQLite\Exceptions\GraphQLException;
use TheCodingMachine\Graphqlite\Validator\ValidationFailedException;

class ProductController
{
    private EntityManagerInterface $em;
    /**
     * @var CompanyRepository
     */
    private CompanyRepository $companyRepository;
    /**
     * @var ProductRepository
     */
    private ProductRepository $productRepository;
    /**
     * @var ValidatorInterface
     */
    private ValidatorInterface $validator;

    public function __construct(EntityManagerInterface $em, CompanyRepository $companyRepository, ProductRepository $productRepository, ValidatorInterface $validator)
    {
        $this->em = $em;
        $this->companyRepository = $companyRepository;
        $this->productRepository = $productRepository;
        $this->validator = $validator;
    }

//    /**
//     * @Mutation()
//     */
//    public function createProduct(string $name, float $price, int $companyId): Product
//    {
//        $product = new Product($name, $this->companyRepository->find($companyId));
//        $product->setPrice($price);
//        $this->em->persist($product);
//        $this->em->flush();
//        return $product;
//    }

//    /**
//     * @Mutation()
//     * @param Option[] $options
//     */
//    public function createProduct(
//            string $name,
//            float $price,
//            int $companyId,
//            array $options = []): Product
//    {
//        $product = new Product($name,
//            $this->companyRepository->
//            find($companyId));
//        $product->setPrice($price);
//        foreach ($options as $option) {
//            $product->addOption($option);
//        }
//
//        // Let's validate the product
//        $errors = $this->validator->validate($product);
//        // Throw an appropriate GraphQL exception if validation errors are encountered
//        ValidationFailedException::throwException($errors);
//
//        $this->em->persist($product);
//        foreach ($product->getOptions() as $option) {
//            $this->em->persist($option);
//        }
//        $this->em->flush();
//        return $product;
//    }

//    /**
//     * @Query()
//     */
//    public function getProduct(int $productId): ?Product
//    {
//        return $this->productRepository->find($productId);
//    }

//    /**
//     * @Factory()
//     */
//    public function optionFactory(string $name, float $price): Option
//    {
//        return new Option($name, $price);
//    }
}
