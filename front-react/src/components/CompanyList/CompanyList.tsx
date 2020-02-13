import * as React from 'react';
import { CompaniesQuery } from '../../generated/graphql';
import {Link} from "react-router-dom";
//import './styles.css';

interface Props {
    data: CompaniesQuery;
}

const className = 'CompanyList';

const CompanyList: React.FC<Props> = ({ data }) => (
    <div className={className}>
        <div className={`${className}__list`}>
            {!!data.companies &&
            data.companies.items.map(
                (company, i) =>
                    !!company && (
                        <div key={i} className="companyrow row">
                            <div className="col">
                                <Link to={"/company/"+company.id}>{company.name}</Link><br/><small>({company.website})</small>
                            </div>
                        </div>
                    ),
            )}
        </div>
    </div>
);

export default CompanyList;
