import * as React from 'react';
import {useCompanyQuery} from '../../generated/graphql';
import Company from './Company';

interface Props {
    id: number;
}

const CompanyContainer: React.FC<Props> = (props) => {
    const { data, error, loading } = useCompanyQuery({ variables: { id: props.id } });

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error || !data) {
        return <div>ERROR</div>;
    }

    return <Company data={data} />;
};

export default CompanyContainer;
