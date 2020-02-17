<?php


namespace App\GraphqlController;


use App\Entity\Company;
use App\Repository\CompanyRepository;
use Porpaginas\Doctrine\ORM\ORMQueryResult;
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
     * @return Company[]
     */
    /*public function getCompanies(?string $search)
    {
        return $this->companyRepository->search($search)->getResult();
    }*/
    /**
     * @Query()
     * @param string|null $search
     * @return ORMQueryResult|Company[]
     */
    public function getCompanies(?string $search)
    {
        return new ORMQueryResult($this->companyRepository->search($search));
    }

    /**
     * @Query()
     * @param int $id
     */
    public function getCompany(int $id): ?Company
    {
        return $this->companyRepository->find($id);
    }
}
