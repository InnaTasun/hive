export default async function appFetch(url) {
  let response = await fetch(url);

  if (response.ok) {
    let data = await response.json();
    return data;
  } else {
    throw new Error('HTTP Error: ' + response.status);
  }
}
