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
        <div className="row">
            {!!data.company?.products &&
            data.company?.products.map(
                (product, i) =>
                    !!product && (
                        <div key={i} className="col-md-4">
                            <div className="row">
                                <div className="col-3">
                                    <img src={"https://i.picsum.photos/id/"+((product.id??0) % 100)+"/50/50.jpg"} />
                                </div>
                                <div className="col-9">
                                    <strong>{product.name}</strong>
                                    <br/>
                                    { product.price }€
                                </div>
                            </div>
                        </div>
                    ),
            )}
        </div>
    </div>
);

export default Company;
