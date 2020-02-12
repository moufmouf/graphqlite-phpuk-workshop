import * as React from 'react';
import {CompaniesQuery, CompanyQuery} from '../../generated/graphql';
//import './styles.css';

interface Props {
    data: CompanyQuery;
}

const className = 'Company';

const Company: React.FC<Props> = ({ data }) => (
    <div className={className}>
        <h3>{ data.company?.name }</h3>
        <p>Products sold by { data.company?.name }:</p>
        <ol className={`${className}__list`}>
            {!!data.company?.products &&
            data.company?.products.map(
                (product, i) =>
                    !!product && (
                        <li key={i} className={`${className}__item`}>
                            <img src={"https://i.picsum.photos/id/"+product.id+"/100/100.jpg"} /><strong>{product.name} ({ product.price }€)</strong>
                        </li>
                    ),
            )}
        </ol>
    </div>
);

export default Company;
