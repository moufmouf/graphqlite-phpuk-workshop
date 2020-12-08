<?php

namespace App\DataFixtures;

use App\Entity\Company;
use App\Entity\Option;
use App\Entity\Product;
use App\Entity\User;
use Bezhanov\Faker\ProviderCollectionHelper;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class AppFixtures extends Fixture
{
    private $passwordEncoder;
    private $faker;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
        $this->faker = Factory::create();
        $this->faker->seed(12345);
        ProviderCollectionHelper::addAllProvidersTo($this->faker);
    }

    public function load(ObjectManager $manager)
    {
        $admin = new User('admin', 'admin@example.com', 'password', $this->passwordEncoder);
        $admin->setRoles(['ROLE_ADMIN']);
        $manager->persist($admin);

        $companies = [];

        for ($i=0; $i<100; $i++) {
            $company = new Company($this->faker->company, $this->faker->url);
            $manager->persist($company);
            $companies[] = $company;
        }

        for ($i=0; $i<1000; $i++) {
            $product = new Product($this->faker->productName, $this->faker->randomElement($companies));
            $product->setPrice($this->faker->randomFloat(2, 1, 10000));
            $product->setMargin($this->faker->randomFloat(2, 0, 500));
            $manager->persist($product);

            for ($j=0; $j<$this->faker->numberBetween(0, 5); $j++) {
                $option = new Option($this->faker->colorName, $this->faker->randomFloat(2, 0, 10), $product);
                $manager->persist($option);
            }
        }

        $user1 = new User('user1', 'user1@example.com', 'password', $this->passwordEncoder);
        $user1->setCompany($companies[0]);
        $manager->persist($user1);

        $user2 = new User('user2', 'user2@example.com', 'password', $this->passwordEncoder);
        $user2->setCompany($companies[1]);
        $manager->persist($user2);

        for ($i=0; $i<50; $i++) {
            $user = new User($this->faker->userName, $this->faker->email, 'password', $this->passwordEncoder);
            $user->setCompany($this->faker->randomElement($companies));
            $manager->persist($user);
        }

        $manager->flush();
    }
}
