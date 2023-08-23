

function buildWhereCondition(field) {
  let condition = `1 = 1 /* Missing config at field [${field.name}] */`;

  let dataType = 'text';
  if (field.type == "Date"){
    dataType = 'date';
  } else if (field.type == "Number"){
    dataType = 'number';
  } else if (field.type == "Boolean"){
    dataType = 'boolean';
  }
  
  const FIELD_NAME = field.name;
  const FIELD_VALUE = field.value;
  const FIELD_VALUE_2 = field.value_2

  const conditionTemplates = {
    boolean: {
      'empty': `${FIELD_NAME} IS NULL`,
      '1': `${FIELD_NAME} = 1`,
      '0': `${FIELD_NAME} = 0`
    },
    text: {
      'empty': `${FIELD_NAME} IS NULL`,
      'equals': `${FIELD_NAME} = '${FIELD_VALUE}'`,
      'contains': `${FIELD_NAME} LIKE '%${FIELD_VALUE}%'`,
      'starts': `${FIELD_NAME} LIKE '${FIELD_VALUE}%'`,
      'ends': `${FIELD_NAME} LIKE '%${FIELD_VALUE}'`
    },
    number: {
      'empty': `${FIELD_NAME} IS NULL`,
      'equals': `${FIELD_NAME} = ${FIELD_VALUE}`,
      'inrange': `(${FIELD_NAME} BETWEEN ${FIELD_VALUE} AND ${FIELD_VALUE_2})`,
      'less': `${FIELD_NAME} < ${FIELD_VALUE}`,
      'greather': `${FIELD_NAME} > ${FIELD_VALUE}`,
      'lessequals': `${FIELD_NAME} <= ${FIELD_VALUE}`,
      'greatherequals': `${FIELD_NAME} >= ${FIELD_VALUE}`
    },
    date: {
      'empty': `${FIELD_NAME} IS NULL`,
      'equals-custom': `CONVERT(date, ${FIELD_NAME}) = CONVERT(date, '${FIELD_VALUE}')`,
      'equals-yesterday': `CONVERT(date, ${FIELD_NAME}) = CONVERT(date, GETDATE()-1)`,
      'equals-today': `CONVERT(date, ${FIELD_NAME}) = CONVERT(date, GETDATE())`,
      'equals-tomorrow': `CONVERT(date, ${FIELD_NAME}) = CONVERT(date, GETDATE()+1)`,
      'equals-month': `(MONTH(${FIELD_NAME}) = MONTH(GETDATE()) AND YEAR(${FIELD_NAME}) = YEAR(GETDATE()))`,
      'equals-year': `YEAR(${FIELD_NAME}) = YEAR(GETDATE())`,
      'inrange-custom': `(CONVERT(date, ${FIELD_NAME}) BETWEEN CONVERT(date, '${FIELD_VALUE}') AND CONVERT(date, '${FIELD_VALUE_2}'))`,
      'inrange-lastdays': `${FIELD_NAME} > GETDATE()-${FIELD_VALUE}`,
      'inrange-nextdays': `${FIELD_NAME} < GETDATE()+${FIELD_VALUE}`,
      'inrange-lastmonths': `${FIELD_NAME} < DATEADD(M, -${FIELD_VALUE}, GETDATE())`,
      'inrange-nextmonths': `${FIELD_NAME} > DATEADD(M, +${FIELD_VALUE}, GETDATE())`,
      'inrange-lastyears': `${FIELD_NAME} < DATEADD(Y, -${FIELD_VALUE}, GETDATE())`,
      'inrange-nextyears': `${FIELD_NAME} > DATEADD(Y, +${FIELD_VALUE}, GETDATE())`
    }
  };

  let conditionSelected = conditionTemplates[dataType][field.condition];
  if (!conditionSelected){
    conditionSelected = conditionTemplates[dataType][field.condition + '-' + field.range];
  }
  if (conditionSelected){
    condition = conditionSelected;
  }

  if (field.not){
    return 'NOT (' + condition + ')'
  }
  return '(' + condition + ')';
}

function buildQuery(table){

  // where conditions
  let conditions = table.fields
    .filter(f => f.condition) // condition must be defined
    .map(field => buildWhereCondition(field));
  let conditionsText = conditions.join(" AND \n\t")

  // select fields
  let fields = table.fields.map(field => {
    if (field.name.startsWith('_')) {
      return `[${field.name}] AS ${field.name.substring(1)}`
    }
    return field.name;
  })
  let fieldsText = fields.join(",\n\t");

  // build query
  let query = `SELECT\n\t${fieldsText}\nFROM [${table.name}]`;
  if (conditionsText){
    query += '\nWHERE\n\t' + conditionsText;
  }

  return query;
}

export default {
  buildQuery
}