<script type="ts">
    import { sdk } from '../sdk';

    let search = "";
</script>

<h1>Companies list</h1>

<p>
    Search filter: <input type="text" bind:value={search} />
</p>

{#await sdk.companies({search}) }
    <p>...waiting</p>
{:then data}
    {#each data.companies.items as company, i}
        <div class="companyrow row">
            <div class="col">
                <a href="/company/{company.id}">{company.name}</a>
                <br/>
                <small>({company.website})</small>
            </div>
        </div>
    {/each}
    <!-- <p>The result is {JSON.stringify(data.data.data.companies)}</p> -->
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}
