<?php


namespace App\Voters;


use App\Entity\User;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;
use Symfony\Component\Security\Core\Authorization\Voter\VoterInterface;

class UserVoter extends Voter
{

    /**
     * @inheritDoc
     */
    protected function supports(string $attribute, $subject)
    {
        return $subject instanceof User;
    }

    /**
     * @param string $attribute
     * @param User $subject
     * @param TokenInterface $token
     * @return bool|void
     */
    protected function voteOnAttribute(string $attribute, $subject, TokenInterface $token)
    {
        if ($attribute === 'email') {
            if ($token->getUser() === 'anon.') {
                return false;
            }
            return $subject->getCompany()->getId() === $token->getUser()->getCompany()->getId();
        }
        return null;
    }
}
