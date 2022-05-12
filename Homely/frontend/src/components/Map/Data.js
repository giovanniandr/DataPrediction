import useSwr from "swr";

export default function Data (){
    const fetcher = (...args) => fetch(...args).then(response => response.json());
    const url = "https://8000-giovanniand-datapredict-052uxmkfwlh.ws-eu44.gitpod.io/address";
    const locations = data && !error ? data.slice(0, 100): [];
    const { data, error } = useSwr(url, fetcher);
}