import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  section: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#bfbfbf',
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCol: {
    width: '16%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#bfbfbf',
  },
  tableCell: {
    margin: 5,
    fontSize: 10,
  },
});

const AuditTrailPDF = ({ data }) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Audit Trail Report</Text>
      </View>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>S NO.</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Date Time</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Form Name</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Action Row Name</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Old Action</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>New Action</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Employee Name</Text>
          </View>
        </View>
        {data.map((item, index) => (
          <View style={styles.tableRow} key={index}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{item.id}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{item.dateTime}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{item.formName}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{item.actionRowName}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{item.oldAction}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{item.newAction}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{item.employeeName}</Text>
            </View>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default AuditTrailPDF;
