// readingList.js
// Methods to load my reading list from my public google sheet
//
// Using Tabletop.js 
// (NOTE) Tabletop.js docs are a bit confusing..
// We need to share AND publish the sheet and then use the SHARED url for access

const ssUrl = "https://docs.google.com/spreadsheets/d/1jq3aaWVLA_d1ydwOCRUZR3x6pcauudvTCTJYbqarJkg/edit?usp=sharing";

// TODO: re-try if failed
async function LoadSheet() {
  try {
    const data = await Tabletop.init({ key: ssUrl });
    return [null, parseSheetData(data)];
  }
  catch(e) {
    return [e];
  }
}

function parseSheetData(data) {
  const ret = {};
  for( const { columnNames, elements, name } of Object.values(data) ) {
    ret[name] = { columnNames, elements };
  }
  return ret;
}