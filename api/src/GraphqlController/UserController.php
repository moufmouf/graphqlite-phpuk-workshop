<?php


namespace App\GraphqlController;


use App\Entity\User;
use App\Repository\UserRepository;
use Porpaginas\Doctrine\ORM\ORMQueryResult;
use TheCodingMachine\GraphQLite\Annotations\Query;
use TheCodingMachine\GraphQLite\Annotations\Right;

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
     * @return ORMQueryResult|User[]
     */
    public function users(?string $search)
    {
        return new ORMQueryResult($this->userRepository->search($search));
    }
}
