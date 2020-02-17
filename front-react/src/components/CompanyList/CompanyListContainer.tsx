import * as React from 'react';
import {useCompaniesQuery} from '../../generated/graphql';
import CompanyList from './CompanyList';

interface Props {
    search: string;
}

const CompanyListContainer: React.FC<Props> = (props) => {
    const { data, error, loading } = useCompaniesQuery({ variables: { search: props.search } });

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error || !data) {
        return <div>ERROR</div>;
    }

    return <CompanyList data={data} />;
};

export default CompanyListContainer;
