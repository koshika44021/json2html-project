// json2html.js

export default function json2html(data) {
    // Start the table with the data-user attribute
    let html = '<table data-user="koshikamanoj44021@gmail.com">';
    
    // Extract the table headers based on the unique keys from the first object
    const headers = Array.from(new Set(data.flatMap(Object.keys)));
    html += '<thead><tr>' + headers.map(header => `<th>${header}</th>`).join('') + '</tr></thead>';
    
    // Add table rows
    html += '<tbody>';
    for (const row of data) {
      html += '<tr>' + headers.map(header => `<td>${row[header] || ''}</td>`).join('') + '</tr>';
    }
    html += '</tbody></table>';
    
    return html;
  }
  