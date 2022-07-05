const ClinicalTypeIdentifier = {
  AllergyRecord: 'AllergyRecord',
  ConditionRecord: 'ConditionRecord',
  CoverageRecord: 'CoverageRecord',
  ImmunizationRecord: 'ImmunizationRecord',
  LabResultRecord: 'LabResultRecord',
  MedicationRecord: 'MedicationRecord',
  ProcedureRecord: 'ProcedureRecord',
  VitalSignRecord: 'VitalSignRecord',
} as const;

export default ClinicalTypeIdentifier;
