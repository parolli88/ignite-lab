import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://api-sa-east-1.graphcms.com/v2/cl4odk72k1wl701xm66tvb48t/master",
    headers: {
        authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTYxMTg4NDAsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2NsNG9kazcyazF3bDcwMXhtNjZ0dmI0OHQvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiNTgxYzlhZjktOWY2Ni00YmI1LWJhZmQtZjM1YmY0Y2Q2OGU0IiwianRpIjoiY2w0dDZlYnB0Mng0MDAxemM4dnFmNXgybyJ9.TQZ4-Zqx9j2JGDMUhOAA0uZZoyufAJnrZNLtOtfbBOtVendXn9zapybE5miIB_h-JDwoLQlIQ_s79WSNQgvUzRHsPBs_WnVgV5NcZm_rFBc4ZhXXjDS1XiXq6cZmIEXuA82MZ7iCCsvi-P4gc9UtN8FyXdsYC5FLuqQVGKiHamDpfBqMZgubTlD2tuWbk-GHeeLvmXK5GzA35XJByIwEJHiZtJxfXC7tf0PcKcVLUhOjOSye9v_mGJaCqe5348OLG0h-OUy6bvrVDkZhCIALvroSUm2IYkvo09vPirt8EHtw-0zTTMVUukEEhmZiG0tq66HWOb_5RJSHELoMtWX5mfB2QYGLv7ggjW6GSmJYUFsCvXlmjk-pGkgrNjYngClsEM4zK78bg2qdSKINosK_Fs56LcQPfZLvukI_FNh0y8BfDRmirRNslOGpLCJvv_JCfEO8qH5cKdFAgfc0Vn13-qi4atRaN5DT4vIqZAH3YFXgfX_VHK-fdq65jECTRFuqI4hZsGagFcbPaepvg2UgmE1a2pKILorbqWAinsZi_ZqR5ggIR6j6ut2ywCdnFruKNcahn0kAPOq_mDdwOI53TsNHCe2mEf28knKubg-J073xADco6ICxYRGJYXX2HtAEjajDOgLDTUGuE38Vyz1BJR1MOhJAQ6gka7KyoZjKNfg'
    },
    cache: new InMemoryCache()
})