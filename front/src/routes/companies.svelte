<script>
    import queries from './companies.graphql'

    console.log('q', queries);
    let search = "";
</script>

<h1>Companies list</h1>

<p>
Search filter: <input type="text" bind:value={search} />
</p>

{#await queries.companies({search, offset: 0}) }
    <p>...waiting</p>
{:then data}
    <table>
    {#each data.data.data.companies.items as company, i}
        <tr>
            <td>{company.name}</td>
            <td>
                <ul>
            {#each company.products as product, j}
                <li>
                {product.name} ({product.price} €)
                </li>
            {/each}
                </ul>
            </td>
        </tr>
    {/each}
    </table>
    <!-- <p>The result is {JSON.stringify(data.data.data.companies)}</p> -->
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}
