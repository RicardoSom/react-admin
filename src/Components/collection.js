import React from "react";
import {
  List,
  Edit,
  Datagrid,
  TextField,
  Filter,
  TextInput,
  Create,
  SimpleForm,
  Show,
  ShowButton,
  SimpleShowLayout,
  EditButton,
  DeleteButton,
  ReferenceInput,
  SelectInput,
  useDataProvider,
  useQuery,
  Query,
  AutocompleteInput,
} from "react-admin";

import axios from "axios";

// const { data, loading, error } = useQuery({
//     type: 'getList',
//     resource: 'categories'
// });

// const categoriesChoices = () => (
//     [{ id: 123, name: 'Leo Tolstoi' }]
// );

// const categoriesChoices = async () => {
//   try {
//     let response = await axios.get("http://127.0.0.1:8000/categories/");
//     console.log(response);
//     return [{ category_id: 1, name: "leon tolstoi" }];
//   } catch (error) {
//     console.error(error);
//     return [{ category_id: 1, name: "leon tolstoi" }];
//   }
// };

// const { data, loading, error } = useQuery({
//     type: 'getList',
//     resource: 'categories'
// });

// const categoriesChoices = () => {
//     const { data, loading, error } = useQuery({
//         type: 'getList',
//         resource: 'categories'
//     });
//     console.log(data);
// };

const CollectionTitle = ({ record }) => {
  return <span>Sintoma {record ? `"${record.name}"` : ""}</span>;
};

export const CollectionList = (props) => (
  <List {...props} title="Biblioteca">
    <Datagrid rowClick="edit">
      <TextField source="title" label="Título" />
      <TextField source="gender_desc" label="Género" />
      <TextField source="country_desc" label="País" />
      <TextField source="director_desc" label="Director" />
      <TextField source="category_desc" label="Categoria" />
      <ShowButton />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const CollectionCreate = (props) => (
  <Create {...props} successMessage="Síntoma creado con éxito">
    <SimpleForm redirect="show">
      <TextInput source="title" label="Título" />
      <TextInput source="gender_desc" label="Género" />
      <TextInput source="country_desc" label="País" />
      <TextInput source="director_desc" label="Director" />
      <ReferenceInput label="Director" source="director_id" reference="directors">
        <SelectInput optionText="name" />
      </ReferenceInput>
      {/* <ReferenceInput label="Categoria" source="category_id" reference="categories">
        <SelectInput
          optionText={categoriesChoices()}
        />
      </ReferenceInput> */}
      {/* <TextInput source="category_desc" label="Categoria" /> */}
    </SimpleForm>
  </Create>
);

export const CollectionEdit = (props) => (
  <Edit {...props} >
    <SimpleForm redirect="show">
      <TextInput label="Nombre" source="name" />
    </SimpleForm>
  </Edit>
);

// export const CollectionShow = (props) => (
//     <Show {...props}>
//         <SimpleShowLayout>
//             <TextField label="Nombre" source="name" />
//         </SimpleShowLayout>
//     </Show>
// );
