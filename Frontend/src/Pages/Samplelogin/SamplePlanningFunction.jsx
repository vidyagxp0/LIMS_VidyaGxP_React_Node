export const randomSampleData = [
    {
        samplePlanId: "SAMP-001",
        sampleId: "SAMPLE-001",
        sampleName: "Active Ingredient Powder",
        sampleType: "Batch Sample",
        batchLotNumber: "Batch-1001",
        sampleSource: "Supplier A",
        plannedDate: "10/01/2024",
        samplePriority: "High",
        sampleQuantity: "200 g",
        tests: "Assay, pH",
        specificationId: "SPEC-001",
        specificationAttachment: "Active_Ingredient_Specification.pdf",
        stpId: "STP-001",
        stpAttachment: "Active_Ingredient_STP.pdf",
        testPlanId: "TESTPLAN-001",
        testName: "Assay Testing",
        testMethod: "HPLC",
        testParameters: "Active Ingredient Concentration",
        testingFrequency: "Every batch",
        testingLocation: "QC Lab",
        requiredInstruments: "HPLC, Analytical Balance",
        testGrouping: "Grouped with stability tests",
        expectedResults: "98% - 102%",
        testingDeadline: "10/05/2024",
        plannerName: "Alice Johnson",
        labTechnician: "Bob Brown",
        reviewer: "Sarah Connor",
        assignedDepartment: "Quality Control",
        supervisor: "Mark Taylor",
        sampleCollectionDate: "09/25/2024",
        testingStartDate: "10/02/2024",
        testingEndDate: "10/04/2024",
        turnaroundTime: "2 days",
        sampleRetestingDate: "N/A",
        reviewDate: "10/06/2024",
        sampleStorageLocation: "Cool Room",
        transportationMethod: "Refrigerated truck",
        samplePreparationMethod: "Prepare as per SOP",
        samplePackagingDetails: "Sealed in sterile containers",
        sampleLabel: "Sample_001_AIP",
        regulatoryRequirements: "GMP compliant",
        qualityControlChecks: "Visual inspection",
        controlSampleReference: "Use standard reference material",
        sampleIntegrityStatus: "Intact",
        riskAssessment: "Low risk of contamination",
        instrumentsReserved: "HPLC reserved",
        labAvailability: "Available on testing date",
        sampleCostEstimation: "$150",
        resourceUtilization: "Reagents reserved",
        sampleMovementHistory: "Received on 09/25/2024",
        testingProgress: "Pending",
        alertsNotifications: "Notify upon results availability",
        deviationLogs: "No deviations logged",
        comments: "Ensure proper storage conditions.",
        attachments: "Previous test reports attached",
        samplingFrequency: "Every 3 months",
        sampleDisposition: "Pending approval",
    },
    {
        samplePlanId: "SAMP-002",
        sampleId: "SAMPLE-002",
        sampleName: "Tablet B",
        sampleType: "Control Sample",
        batchLotNumber: "Batch-2002",
        sampleSource: "Internal Production",
        plannedDate: "10/15/2024",
        samplePriority: "Medium",
        sampleQuantity: "100 tablets",
        tests: "Assay, Dissolution",
        specificationId: "SPEC-002",
        specificationAttachment: "Tablet_Specification.pdf",
        stpId: "STP-002",
        stpAttachment: "Tablet_STP.pdf",
        testPlanId: "TESTPLAN-002",
        testName: "Dissolution Testing",
        testMethod: "USP <711>",
        testParameters: "Dissolution Rate",
        testingFrequency: "Each batch",
        testingLocation: "Dissolution Lab",
        requiredInstruments: "Dissolution Apparatus",
        testGrouping: "Grouped with stability tests",
        expectedResults: "≥ 85% dissolved in 30 min",
        testingDeadline: "10/20/2024",
        plannerName: "Jane Smith",
        labTechnician: "Charlie Davis",
        reviewer: "Tim Howard",
        assignedDepartment: "Quality Control",
        supervisor: "Lisa Ray",
        sampleCollectionDate: "10/01/2024",
        testingStartDate: "10/16/2024",
        testingEndDate: "10/19/2024",
        turnaroundTime: "3 days",
        sampleRetestingDate: "N/A",
        reviewDate: "10/21/2024",
        sampleStorageLocation: "Controlled Room Temperature",
        transportationMethod: "Standard shipping",
        samplePreparationMethod: "Dilute to 10 mg/mL",
        samplePackagingDetails: "Packaged in a labeled box",
        sampleLabel: "Sample_002_TabletB",
        regulatoryRequirements: "FDA guidelines",
        qualityControlChecks: "Conduct assay verification",
        controlSampleReference: "Use control sample for comparison",
        sampleIntegrityStatus: "Intact",
        riskAssessment: "Medium risk of degradation",
        instrumentsReserved: "Dissolution apparatus reserved",
        labAvailability: "Available for testing",
        sampleCostEstimation: "$120",
        resourceUtilization: "Test reagents reserved",
        sampleMovementHistory: "Collected on 10/01/2024",
        testingProgress: "Pending",
        alertsNotifications: "Alert when results are ready",
        deviationLogs: "No deviations logged",
        comments: "Verify dissolution media preparation",
        attachments: "Dissolution SOP attached",
        samplingFrequency: "Annually",
        sampleDisposition: "Pending review",
    },
    {
        samplePlanId: "SAMP-003",
        sampleId: "SAMPLE-003",
        sampleName: "Syrup C",
        sampleType: "Stability Sample",
        batchLotNumber: "Batch-3003",
        sampleSource: "Supplier B",
        plannedDate: "11/01/2024",
        samplePriority: "High",
        sampleQuantity: "1 L",
        tests: "pH, Viscosity",
        specificationId: "SPEC-003",
        specificationAttachment: "Syrup_Specification.pdf",
        stpId: "STP-003",
        stpAttachment: "Syrup_STP.pdf",
        testPlanId: "TESTPLAN-003",
        testName: "Stability Testing",
        testMethod: "Internal Method 101",
        testParameters: "pH and Viscosity over time",
        testingFrequency: "Quarterly",
        testingLocation: "Stability Lab",
        requiredInstruments: "Viscometer, pH Meter",
        testGrouping: "Single test",
        expectedResults: "pH 5.0 - 6.5; Viscosity 200 - 300 cP",
        testingDeadline: "11/10/2024",
        plannerName: "Emily White",
        labTechnician: "David Black",
        reviewer: "Dr. Angela Carter",
        assignedDepartment: "Quality Control",
        supervisor: "Fiona Green",
        sampleCollectionDate: "10/15/2024",
        testingStartDate: "11/02/2024",
        testingEndDate: "11/05/2024",
        turnaroundTime: "3 days",
        sampleRetestingDate: "N/A",
        reviewDate: "11/06/2024",
        sampleStorageLocation: "Refrigerator",
        transportationMethod: "Cool shipping",
        samplePreparationMethod: "Mix thoroughly before testing",
        samplePackagingDetails: "Seal in glass bottles",
        sampleLabel: "Sample_003_SyrupC",
        regulatoryRequirements: "GMP compliant",
        qualityControlChecks: "Check viscosity before testing",
        controlSampleReference: "Use previous batch for comparison",
        sampleIntegrityStatus: "Intact",
        riskAssessment: "Low risk of contamination",
        instrumentsReserved: "Viscometer reserved",
        labAvailability: "Available for testing",
        sampleCostEstimation: "$180",
        resourceUtilization: "Laboratory supplies reserved",
        sampleMovementHistory: "Received on 10/15/2024",
        testingProgress: "Pending",
        alertsNotifications: "Notify when results are ready",
        deviationLogs: "No deviations logged",
        comments: "Ensure proper storage conditions.",
        attachments: "Stability testing SOP attached",
        samplingFrequency: "Every 3 months",
        sampleDisposition: "Pending analysis",
    },
    {
        samplePlanId: "SAMP-004",
        sampleId: "SAMPLE-004",
        sampleName: "Control Sample D",
        sampleType: "Control Sample",
        batchLotNumber: "Batch-4004",
        sampleSource: "Internal QC",
        plannedDate: "11/15/2024",
        samplePriority: "Medium",
        sampleQuantity: "10 mL",
        tests: "Assay, Microbial Limits",
        specificationId: "SPEC-004",
        specificationAttachment: "Control_Sample_Specification.pdf",
        stpId: "STP-004",
        stpAttachment: "Control_Sample_STP.pdf",
        testPlanId: "TESTPLAN-004",
        testName: "Control Testing",
        testMethod: "USP <61>",
        testParameters: "Total Aerobic Microbial Count",
        testingFrequency: "Each batch",
        testingLocation: "Microbiology Lab",
        requiredInstruments: "Incubator, Petri Dishes",
        testGrouping: "Single test",
        expectedResults: "No growth observed",
        testingDeadline: "11/20/2024",
        plannerName: "Sarah Connor",
        labTechnician: "Tom Hanks",
        reviewer: "Dr. John Smith",
        assignedDepartment: "Microbiology",
        supervisor: "Lisa Ray",
        sampleCollectionDate: "11/01/2024",
        testingStartDate: "11/16/2024",
        testingEndDate: "11/18/2024",
        turnaroundTime: "2 days",
        sampleRetestingDate: "N/A",
        reviewDate: "11/21/2024",
        sampleStorageLocation: "Controlled Environment",
        transportationMethod: "Standard shipping",
        samplePreparationMethod: "Prepare as per SOP",
        samplePackagingDetails: "Sealed in sterile containers",
        sampleLabel: "Sample_004_ControlD",
        regulatoryRequirements: "FDA compliant",
        qualityControlChecks: "Visual and sterility check",
        controlSampleReference: "Use control sample for comparison",
        sampleIntegrityStatus: "Intact",
        riskAssessment: "Low risk of contamination",
        instrumentsReserved: "Incubator reserved",
        labAvailability: "Available for testing",
        sampleCostEstimation: "$75",
        resourceUtilization: "Media reserved",
        sampleMovementHistory: "Received on 11/01/2024",
        testingProgress: "Pending",
        alertsNotifications: "Notify upon completion",
        deviationLogs: "No deviations logged",
        comments: "Verify sterilization procedures",
        attachments: "Microbial testing SOP attached",
        samplingFrequency: "Every batch",
        sampleDisposition: "Pending approval",
    },
    {
        samplePlanId: "SAMP-005",
        sampleId: "SAMPLE-005",
        sampleName: "Gel Sample E",
        sampleType: "Stability Sample",
        batchLotNumber: "Batch-5005",
        sampleSource: "Supplier C",
        plannedDate: "12/01/2024",
        samplePriority: "High",
        sampleQuantity: "250 g",
        tests: "Viscosity, pH",
        specificationId: "SPEC-005",
        specificationAttachment: "Gel_Specification.pdf",
        stpId: "STP-005",
        stpAttachment: "Gel_STP.pdf",
        testPlanId: "TESTPLAN-005",
        testName: "Stability Testing",
        testMethod: "Internal Method 202",
        testParameters: "pH and Viscosity over time",
        testingFrequency: "Quarterly",
        testingLocation: "Stability Lab",
        requiredInstruments: "Viscometer, pH Meter",
        testGrouping: "Grouped with other tests",
        expectedResults: "pH 6.0 - 7.0; Viscosity 1000 - 1500 cP",
        testingDeadline: "12/10/2024",
        plannerName: "Emily White",
        labTechnician: "James Lee",
        reviewer: "Dr. Angela Carter",
        assignedDepartment: "Quality Control",
        supervisor: "Fiona Green",
        sampleCollectionDate: "11/15/2024",
        testingStartDate: "12/02/2024",
        testingEndDate: "12/05/2024",
        turnaroundTime: "3 days",
        sampleRetestingDate: "N/A",
        reviewDate: "12/06/2024",
        sampleStorageLocation: "Cool Room",
        transportationMethod: "Refrigerated transport",
        samplePreparationMethod: "Mix before testing",
        samplePackagingDetails: "Packaged in labeled containers",
        sampleLabel: "Sample_005_GelE",
        regulatoryRequirements: "GMP compliant",
        qualityControlChecks: "Conduct initial viscosity check",
        controlSampleReference: "Use control gel for comparison",
        sampleIntegrityStatus: "Intact",
        riskAssessment: "Low risk of contamination",
        instrumentsReserved: "Viscometer reserved",
        labAvailability: "Available for testing",
        sampleCostEstimation: "$220",
        resourceUtilization: "Chemicals reserved",
        sampleMovementHistory: "Received on 11/15/2024",
        testingProgress: "Pending",
        alertsNotifications: "Alert when results are ready",
        deviationLogs: "No deviations logged",
        comments: "Check for proper storage",
        attachments: "Stability testing SOP attached",
        samplingFrequency: "Every 6 months",
        sampleDisposition: "Pending analysis",
    },
    {
        samplePlanId: "SAMP-006",
        sampleId: "SAMPLE-006",
        sampleName: "Cream Sample F",
        sampleType: "Batch Sample",
        batchLotNumber: "Batch-6006",
        sampleSource: "Internal Production",
        plannedDate: "12/15/2024",
        samplePriority: "Medium",
        sampleQuantity: "300 g",
        tests: "Assay, Microbial Limits",
        specificationId: "SPEC-006",
        specificationAttachment: "Cream_Specification.pdf",
        stpId: "STP-006",
        stpAttachment: "Cream_STP.pdf",
        testPlanId: "TESTPLAN-006",
        testName: "Assay and Microbial Testing",
        testMethod: "HPLC and USP <61>",
        testParameters: "Active Ingredient and Microbial Count",
        testingFrequency: "Every batch",
        testingLocation: "QC Lab",
        requiredInstruments: "HPLC, Incubator",
        testGrouping: "Assay and microbial tests",
        expectedResults: "Assay 98% - 102%; No growth",
        testingDeadline: "12/20/2024",
        plannerName: "Linda Grey",
        labTechnician: "Tom Hanks",
        reviewer: "Dr. John Doe",
        assignedDepartment: "Quality Control",
        supervisor: "Paul Walker",
        sampleCollectionDate: "12/01/2024",
        testingStartDate: "12/16/2024",
        testingEndDate: "12/19/2024",
        turnaroundTime: "3 days",
        sampleRetestingDate: "N/A",
        reviewDate: "12/21/2024",
        sampleStorageLocation: "Refrigerator",
        transportationMethod: "Cool pack",
        samplePreparationMethod: "Prepare as per SOP",
        samplePackagingDetails: "Sealed in labeled jars",
        sampleLabel: "Sample_006_CreamF",
        regulatoryRequirements: "FDA guidelines",
        qualityControlChecks: "Visual inspection and assay verification",
        controlSampleReference: "Use control cream for comparison",
        sampleIntegrityStatus: "Intact",
        riskAssessment: "Low risk of contamination",
        instrumentsReserved: "HPLC reserved",
        labAvailability: "Available for testing",
        sampleCostEstimation: "$200",
        resourceUtilization: "Reserved testing materials",
        sampleMovementHistory: "Collected on 12/01/2024",
        testingProgress: "Pending",
        alertsNotifications: "Notify upon completion",
        deviationLogs: "No deviations logged",
        comments: "Ensure all equipment is calibrated",
        attachments: "Microbial testing SOP attached",
        samplingFrequency: "Every batch",
        sampleDisposition: "Pending review",
    },
    {
        samplePlanId: "SAMP-007",
        sampleId: "SAMPLE-007",
        sampleName: "Gel Sample G",
        sampleType: "Stability Sample",
        batchLotNumber: "Batch-7007",
        sampleSource: "Supplier D",
        plannedDate: "01/05/2025",
        samplePriority: "High",
        sampleQuantity: "500 g",
        tests: "pH, Viscosity",
        specificationId: "SPEC-007",
        specificationAttachment: "Gel_Specification.pdf",
        stpId: "STP-007",
        stpAttachment: "Gel_STP.pdf",
        testPlanId: "TESTPLAN-007",
        testName: "Gel Stability Testing",
        testMethod: "Internal Method 303",
        testParameters: "pH and Viscosity over time",
        testingFrequency: "Quarterly",
        testingLocation: "Stability Lab",
        requiredInstruments: "Viscometer, pH Meter",
        testGrouping: "Grouped with other tests",
        expectedResults: "pH 6.5 - 7.5; Viscosity 500 - 800 cP",
        testingDeadline: "01/12/2025",
        plannerName: "Jane Austen",
        labTechnician: "Mark Twain",
        reviewer: "Dr. Clara Barton",
        assignedDepartment: "Quality Control",
        supervisor: "Samuel Adams",
        sampleCollectionDate: "12/01/2024",
        testingStartDate: "01/06/2025",
        testingEndDate: "01/09/2025",
        turnaroundTime: "3 days",
        sampleRetestingDate: "N/A",
        reviewDate: "01/13/2025",
        sampleStorageLocation: "Cool Room",
        transportationMethod: "Refrigerated transport",
        samplePreparationMethod: "Mix thoroughly before testing",
        samplePackagingDetails: "Packaged in labeled containers",
        sampleLabel: "Sample_007_GelG",
        regulatoryRequirements: "GMP compliant",
        qualityControlChecks: "Check viscosity and pH before testing",
        controlSampleReference: "Use control gel for comparison",
        sampleIntegrityStatus: "Intact",
        riskAssessment: "Low risk of contamination",
        instrumentsReserved: "Viscometer reserved",
        labAvailability: "Available for testing",
        sampleCostEstimation: "$220",
        resourceUtilization: "Chemicals and glassware reserved",
        sampleMovementHistory: "Received on 12/01/2024",
        testingProgress: "Pending",
        alertsNotifications: "Alert when results are ready",
        deviationLogs: "No deviations logged",
        comments: "Check for proper storage conditions.",
        attachments: "Stability testing SOP attached",
        samplingFrequency: "Every 3 months",
        sampleDisposition: "Pending analysis",
    },
    {
        samplePlanId: "SAMP-008",
        sampleId: "SAMPLE-008",
        sampleName: "Control Sample H",
        sampleType: "Control Sample",
        batchLotNumber: "Batch-8008",
        sampleSource: "Internal QC",
        plannedDate: "01/20/2025",
        samplePriority: "Medium",
        sampleQuantity: "10 mL",
        tests: "Assay, Microbial Limits",
        specificationId: "SPEC-008",
        specificationAttachment: "Control_Sample_Specification.pdf",
        stpId: "STP-008",
        stpAttachment: "Control_Sample_STP.pdf",
        testPlanId: "TESTPLAN-008",
        testName: "Control Testing",
        testMethod: "USP <61>",
        testParameters: "Total Aerobic Microbial Count",
        testingFrequency: "Each batch",
        testingLocation: "Microbiology Lab",
        requiredInstruments: "Incubator, Petri Dishes",
        testGrouping: "Single test",
        expectedResults: "No growth observed",
        testingDeadline: "01/25/2025",
        plannerName: "Sarah Connor",
        labTechnician: "Tom Hanks",
        reviewer: "Dr. John Doe",
        assignedDepartment: "Microbiology",
        supervisor: "Lisa Ray",
        sampleCollectionDate: "01/10/2025",
        testingStartDate: "01/21/2025",
        testingEndDate: "01/23/2025",
        turnaroundTime: "2 days",
        sampleRetestingDate: "N/A",
        reviewDate: "01/26/2025",
        sampleStorageLocation: "Controlled Environment",
        transportationMethod: "Standard shipping",
        samplePreparationMethod: "Prepare as per SOP",
        samplePackagingDetails: "Sealed in sterile containers",
        sampleLabel: "Sample_008_ControlH",
        regulatoryRequirements: "FDA compliant",
        qualityControlChecks: "Visual and sterility check",
        controlSampleReference: "Use control sample for comparison",
        sampleIntegrityStatus: "Intact",
        riskAssessment: "Low risk of contamination",
        instrumentsReserved: "Incubator reserved",
        labAvailability: "Available for testing",
        sampleCostEstimation: "$75",
        resourceUtilization: "Media reserved",
        sampleMovementHistory: "Collected on 01/10/2025",
        testingProgress: "Pending",
        alertsNotifications: "Notify upon completion",
        deviationLogs: "No deviations logged",
        comments: "Verify sterilization procedures",
        attachments: "Microbial testing SOP attached",
        samplingFrequency: "Every batch",
        sampleDisposition: "Pending approval",
    },
    {
        samplePlanId: "SAMP-009",
        sampleId: "SAMPLE-009",
        sampleName: "Injection Sample I",
        sampleType: "Batch Sample",
        batchLotNumber: "Batch-9009",
        sampleSource: "Supplier E",
        plannedDate: "02/01/2025",
        samplePriority: "High",
        sampleQuantity: "5 mL",
        tests: "Assay, Endotoxin Testing",
        specificationId: "SPEC-009",
        specificationAttachment: "Injection_Specification.pdf",
        stpId: "STP-009",
        stpAttachment: "Injection_STP.pdf",
        testPlanId: "TESTPLAN-009",
        testName: "Assay and Endotoxin Testing",
        testMethod: "HPLC and LAL Test",
        testParameters: "Active Ingredient and Endotoxin Levels",
        testingFrequency: "Each batch",
        testingLocation: "Injectables Lab",
        requiredInstruments: "HPLC, LAL Test Equipment",
        testGrouping: "Grouped with assay tests",
        expectedResults: "Assay 98% - 102%; Endotoxin < 0.5 EU/mL",
        testingDeadline: "02/05/2025",
        plannerName: "John Doe",
        labTechnician: "Alice Johnson",
        reviewer: "Dr. Emma Watson",
        assignedDepartment: "Quality Control",
        supervisor: "Max Payne",
        sampleCollectionDate: "01/15/2025",
        testingStartDate: "02/02/2025",
        testingEndDate: "02/04/2025",
        turnaroundTime: "2 days",
        sampleRetestingDate: "N/A",
        reviewDate: "02/06/2025",
        sampleStorageLocation: "Refrigerator",
        transportationMethod: "Cool pack",
        samplePreparationMethod: "Prepare as per SOP",
        samplePackagingDetails: "Sealed in sterile vials",
        sampleLabel: "Sample_009_InjectionI",
        regulatoryRequirements: "GMP compliant",
        qualityControlChecks: "Conduct assay verification",
        controlSampleReference: "Use control injection for comparison",
        sampleIntegrityStatus: "Intact",
        riskAssessment: "Low risk of contamination",
        instrumentsReserved: "HPLC reserved",
        labAvailability: "Available for testing",
        sampleCostEstimation: "$300",
        resourceUtilization: "Reserved testing materials",
        sampleMovementHistory: "Collected on 01/15/2025",
        testingProgress: "Pending",
        alertsNotifications: "Notify upon results availability",
        deviationLogs: "No deviations logged",
        comments: "Ensure all equipment is calibrated",
        attachments: "Endotoxin testing SOP attached",
        samplingFrequency: "Every batch",
        sampleDisposition: "Pending review",
    },
    {
        samplePlanId: "SAMP-010",
        sampleId: "SAMPLE-010",
        sampleName: "Ointment Sample J",
        sampleType: "Control Sample",
        batchLotNumber: "Batch-1010",
        sampleSource: "Internal QC",
        plannedDate: "02/15/2025",
        samplePriority: "Medium",
        sampleQuantity: "250 g",
        tests: "Assay, Stability",
        specificationId: "SPEC-010",
        specificationAttachment: "Ointment_Specification.pdf",
        stpId: "STP-010",
        stpAttachment: "Ointment_STP.pdf",
        testPlanId: "TESTPLAN-010",
        testName: "Ointment Testing",
        testMethod: "HPLC and Stability Test",
        testParameters: "Active Ingredient and Stability Over Time",
        testingFrequency: "Quarterly",
        testingLocation: "Stability Lab",
        requiredInstruments: "HPLC, Stability Chamber",
        testGrouping: "Single test",
        expectedResults: "Assay 98% - 102%; Stability < 5% degradation",
        testingDeadline: "02/20/2025",
        plannerName: "Emily Brown",
        labTechnician: "Michael Scott",
        reviewer: "Dr. Nancy Drew",
        assignedDepartment: "Quality Control",
        supervisor: "Oscar Martinez",
        sampleCollectionDate: "02/01/2025",
        testingStartDate: "02/16/2025",
        testingEndDate: "02/19/2025",
        turnaroundTime: "3 days",
        sampleRetestingDate: "N/A",
        reviewDate: "02/21/2025",
        sampleStorageLocation: "Cool Room",
        transportationMethod: "Standard shipping",
        samplePreparationMethod: "Mix thoroughly before testing",
        samplePackagingDetails: "Packaged in jars",
        sampleLabel: "Sample_010_OintmentJ",
        regulatoryRequirements: "FDA compliant",
        qualityControlChecks: "Visual inspection and assay verification",
        controlSampleReference: "Use control ointment for comparison",
        sampleIntegrityStatus: "Intact",
        riskAssessment: "Low risk of contamination",
        instrumentsReserved: "Stability chamber reserved",
        labAvailability: "Available for testing",
        sampleCostEstimation: "$200",
        resourceUtilization: "Testing materials reserved",
        sampleMovementHistory: "Collected on 02/01/2025",
        testingProgress: "Pending",
        alertsNotifications: "Notify upon completion",
        deviationLogs: "No deviations logged",
        comments: "Ensure proper handling",
        attachments: "Ointment testing SOP attached",
        samplingFrequency: "Quarterly",
        sampleDisposition: "Pending approval",
    }
];