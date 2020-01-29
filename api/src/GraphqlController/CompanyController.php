<?php


namespace App\GraphqlController;


use App\Entity\Company;
use App\Repository\CompanyRepository;
use TheCodingMachine\GraphQLite\Annotations\Query;

class CompanyController
{
    /**
     * @var CompanyRepository
     */
    private CompanyRepository $companyRepository;

    public function __construct(CompanyRepository $companyRepository)
    {
        $this->companyRepository = $companyRepository;
    }

    /**
     * @Query()
     * @param string|null $search
     * @return Company[]
     */
    public function getCompanies(?string $search)
    {
        return $this->companyRepository->search($search);
    }
}
