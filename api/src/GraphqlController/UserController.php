<?php


namespace App\GraphqlController;


use App\Entity\User;
use App\Repository\UserRepository;
use Porpaginas\Doctrine\ORM\ORMQueryResult;
use TheCodingMachine\GraphQLite\Annotations\Query;

class UserController
{

    /**
     * @var UserRepository
     */
    private UserRepository $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    /**
     * @Query()
     * @return ORMQueryResult|User[]
     */
    public function users()
    {
        return new ORMQueryResult($this->userRepository->findAll());
    }
}
