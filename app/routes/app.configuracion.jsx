import {FormLayout, TextField, Page, Layout, Card, Text, Box, Button, BlockStack} from '@shopify/polaris';
import React from 'react';

export default function AdditionalPage() {
  return (
    <Page>
      <ui-title-bar title="Configuración" />
      <Layout>
        <Layout.Section>
          <Card>
            <BlockStack gap="200">
              <Text as="h2" variant="headingMd">Nota</Text>
              <Text as="p" variant="bodyMd">Para usar la plataforma en mdo prueba deberá usar los datos correspondiente del panel Sandbox en el siguiente formulario.</Text>
              <Box paddingBlockEnd="200">
                <FormLayout>
                  <TextField label="Sandbox KEY" onChange={() => {}} autoComplete="off" />
                  <Button submit variant="primary">Guardar</Button>
                </FormLayout>
              </Box>
            </BlockStack>
              
              <Box>
                
              </Box>
              
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
