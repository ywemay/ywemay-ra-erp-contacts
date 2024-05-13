let contacts = [
  { id: 1, contact_type: 1, val: 'kind@email.co'},
  { id: 2, contact_type: 3, val: 'mia-skype'},
  { id: 3, contact_type: 2, val: '888 888 8888'},
  { id: 4, contact_type: 4, val: 'mia-we-chat'},
  { id: 5, contact_type: 5, val: 'mia-that-s-up'},
  { id: 6, contact_type: 6, val: 'www.mia-web-site.com'},
];

const getList =(resource, params) => new Promise((resolve, reject) => {
  let re;
  if (resource === 'customers') re = {
    data: [{id:1, company_name: "A company Name"}] }
  else if (resource === 'contacts') re = {
    data: contacts, total: contacts.length}
  else if (resource === 'more_contacts') re = {
    data: contacts, total: contacts.length}
  else if (resource === 'projects') re = {
    data: [{id:1, title: "Build a Super Cool Future"}] }
  else if (resource === 'products') re = {
    data: [{id: 1, title: "Super Cheese Bike"}] }
  else re = { data: [] };
  resolve(re)
});

const findContactById = (id) => {
  return contacts.find((contact) => contact.id === id);
}

export const dataProvider = {
 getList, getMany: getList,
 getOne: (resource, params) => new Promise((resolve, reject) => {
  if (['contacts', 'more_contacts'].includes(resource)) {
    const { id: i } = params;
    const contact = findContactById(parseInt(i))
    resolve({ data: { ...contact}})
  }
  else resolve({data: {}})
 }),
 create: (resource, params) => new Promise((resolve, _reject) => {
  console.log(resource, params)
  if (['contacts', 'more_contacts'].includes(resource)) {
    const id = contacts.length + 1;
    contacts.push({id, ...params.data})
    resolve({data: contacts.find(c => id === c.id)})
  }
 }),
 deleteMany: (resource, params) => new Promise((resolve, reject) => {
  if (['contacts', 'more_contacts'].includes(resource)) {
    contacts = contacts.filter(c => !params.ids.includes(c.id))
    resolve({data:params.ids});
  }
 })
}