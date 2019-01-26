/**
 * Created by ideabobo on 2015/3/19.
 */
var obj = {};
var _records = [];

obj = {};
obj.id = 1;
obj.chapter = 1;
obj.title = "Is the complete \"File of Mandatory Requirements\" (VRF) available";
obj.weight = 10;
obj.note = "©: The \"File of Mandatory Requirements\" shall be available, up to date, and approved. In case of modification or carry over, check if VRF has been updated";
_records.push(obj);

obj = {};
obj.id = 2;
obj.chapter = 1;
obj.title = "Is complete  Quality Assurance File (QAF) available?";
obj.weight = 10;
obj.note = "©: The QAF shall conform to the requirements specified @ stage 2 (VRF) and to what was accepted @ stage 3 by both parties. In case of modification or carry over, check if QAF has been updated.";
_records.push(obj);

obj = {};
obj.id = 3;
obj.chapter = 1;
obj.title = "Is Analysis of any revisions, concerns expressed or changes made  since stage 3?";
obj.weight = 5;
obj.note = "©: The documentation may have changed (e.g. with respect to plans, product and process FMEA, material specifications, surveillance plan, or any other specific document). Examine any concerns expressed during the acceptance @ stage 3. Check the updates. Check that the FMEA rating is complete.";
_records.push(obj);

obj = {};
obj.id = 4;
obj.chapter = 1;
obj.title = "Is Analysis of any critical points (if necessary) ?";
obj.weight = 5;
obj.note = "©: For example, check that critical RPNs have been identified.  The criticality of each RPN is up to the judgment of the auditor.  Verification of corrective action implementation is dealt with in Question 53.";
_records.push(obj);

obj = {};
obj.id = 5;
obj.chapter = 1;
obj.title = "Are reports available for in-house testing, inspection, validation of products, and validation of production processes before manufacture and submission of ISs (stage 5) ?";
obj.weight = 10;
obj.note = "©: e.g. check that equipment and tooling have been qualified.";
_records.push(obj);

obj = {};
obj.id = 6;
obj.chapter = 1;
obj.title = "Is Characteristics in compliance to plans and specifications? ";
obj.weight = 10;
obj.note = "©: For periodic audits (existing process), check the full Initial Samples documentation.";
_records.push(obj);

obj = {};
obj.id = 7;
obj.chapter = 1;
obj.title = "Is Cmk ≥ 2.0,  Cpk >1.67,  target Ppk ≥2 for processes with critical,  R, or S characteristics?";
obj.weight = 10;
obj.note = "©: If SPC is applicable, ensure that studies to check normal distribution have been performed.";
_records.push(obj);

obj = {};
obj.id = 8;
obj.chapter = 1;
obj.title = "All documents of Initial Samples Files as defined in the AQPpp matrix are available and approved (only for audits of processes already in serial production, otherwise chose 0) ? ";
obj.weight = 10;
obj.note = "©: e.g. FPDR report, process audit report, Initial Samples test and inspection reports Initial Samples approval record, packaging validation including back up packaging, Valeo line testing records,  full traceability of records vs Initial Samples, …In case of modification or carry over, check if new I.S. have been presented and approved.";
_records.push(obj);

obj = {};
obj.id = 9;
obj.chapter = 1;
obj.title = "Quality monitoring file is available, complete and updated (only for audits of processes already in serial production, otherwise chose 0) ?";
obj.weight = 10;
obj.note = "©: All records of continuous conformance testing as defined in the Surveillance Plan are available (e.g. results of products audits, of functional testing).";
_records.push(obj);


//Chapter 2
obj = {};
obj.id = 10;
obj.chapter = 2;
obj.weight = 5;
obj.title = "Purchase orders with specific requirements?";
obj.note = "©: Revision level included.";
_records.push(obj);

obj = {};
obj.id = 11;
obj.chapter = 2;
obj.weight = 5;
obj.title = "Are production supplies dependent on acceptance of ISs? ";
obj.note = "©:  Check each component / raw material of the reference being audited. Example of  lock-out mechanism: ";
_records.push(obj);

obj = {};
obj.id = 12;
obj.chapter = 2;
obj.weight = 5;
obj.title = "Purchase orders with specific requirements?";
obj.note = "©:  This is a check that the delivery conforms to the purchase order: Identification, revision, packaging, presence of certificate of analysis, check on delivery note, inspection stamp, shelf life, etc.";
_records.push(obj);

obj = {};
obj.id = 13;
obj.chapter = 2;
obj.weight = 5;
obj.title = "Is there a procedure for checking incoming deliveries of special batches?";
obj.note = "©:  Prototypes, test batches, initial samples, pre-production parts, etc. Check on waivers, modifications, etc.";
_records.push(obj);
obj = {};
obj.id = 14;
obj.chapter = 2;
obj.weight = 5;
obj.title = " Are incoming products kept in separate and formal areas? ";
obj.note = "©:  E.g. Products to be inspected, products awaiting decisions, etc.    Areas formally identified / boundaries respected.";

_records.push(obj);
obj = {};
obj.id = 15;
obj.chapter = 2;
obj.weight = 10;
obj.title = "Is there a procedure for incoming goods inspection? ";
obj.note = "©:  The product ordered and the product delivered have the same index of definition (revision level), inspection and test plans, sampling and acceptance rules, analysis results, disposition of nonconforming product, archiving of records, ...";
_records.push(obj);
obj = {};
obj.id = 16;
obj.chapter = 2;
obj.weight = 5;
obj.title = "List of PQA'able and PQA'd products?";
obj.note = "©: Example: Computerized management of PQA, and the status of each reference.";
_records.push(obj);
obj = {};
obj.id = 17;
obj.chapter = 2;
obj.weight = 5;
obj.title = "Physical identification of PQA status? ";
_records.push(obj);
obj = {};
obj.id = 18;
obj.chapter = 2;
obj.weight = 5;
obj.title = "Is there an audit procedure for incoming references?";
obj.note = "©: Periodic audit of references subject to PQA. Does an audit schedule exist?";
_records.push(obj);
obj = {};
obj.id = 19;
obj.chapter = 2;
obj.weight = 10;
obj.title = "  PQA documentation with revision numbers for each product family (IS, preproduction, etc…)?";

obj.title = "  Identification and traceability of material batches (lots) and components with controlled, critical, R or S characteristics? ";
obj.note = "©: Revision level included.";
_records.push(obj);
obj = {};
obj.id = 20;
obj.chapter = 2;
obj.weight = 10;
obj.title = " Quality Status: AWAITING DECISION, ACCEPTED, REJECTED, ACCEPTED UNDER WAIVER, REWORK, etc.?  ";
obj.note = "©: Formats used linked to procedures.";
obj.note = "©: Origin of traceability, list of followed-up components defined?";
_records.push(obj);
obj = {};
obj.id = 21;
obj.chapter = 2;
obj.weight = 10;
obj.title = "  Suitable inspection equipment available and calibrated?  ";
obj.note = "©: In relation to the products, tolerances (Gage R&R, etc.), range, etc.";

_records.push(obj);
obj = {};
obj.id = 22;
obj.chapter = 2;
obj.weight = 5;
obj.note = "©: If applicable. Example: Periodic verification that raw materials conform to the certificates supplied.";

_records.push(obj);
obj = {};
obj.id = 23;
obj.chapter = 2;
obj.weight = 5;
obj.title = "  Is there a procedure for handling and storage?";

_records.push(obj);
obj = {};
obj.id = 24;
obj.chapter = 2;
obj.weight = 5;
obj.title = "  Appropriate storage conditions, functional layout, and locations identified?";
obj.note = "©: Risk of damage";

_records.push(obj);
obj = {};
obj.id = 25;
obj.chapter = 2;
obj.weight = 5;
obj.title = "  Management of security (safety) stock of components and materials? ";
obj.note = "©: Existence, rotation, storage conditions, etc.";

_records.push(obj);
obj = {};
obj.id = 26;
obj.chapter = 2;
obj.weight = 10;
obj.title = "  Rotation of stock (FIFO), expiry dates respected?  ";
obj.note = "©: Perishable items.";

_records.push(obj);
obj = {};
obj.id = 27;
obj.chapter = 2;
obj.weight = 5;
obj.title = "  Maintenance of storage and handling equipment? ";

_records.push(obj);
obj = {};
obj.id = 28;
obj.chapter = 2;
obj.weight = 5;
obj.title = "  Handling equipment and methods suitable for the product and the safety of personnel? ";
obj.note = "©: Including back-up equipment.";

_records.push(obj);
obj = {};
obj.id = 29;
obj.chapter = 2;
obj.weight = 5;
obj.title = "  Off-site storage or back-up storage? ";
obj.note = "©: Functional responsibility, storage conditions and quality, evaluation of any additional risk.";

_records.push(obj);
obj = {};
obj.id = 30;
obj.chapter = 2;
obj.weight = 5;
obj.title = "  Packaging suitable for the product and in conformance with specifications? ";
obj.note = "©: Dimensions, quantities, no risk of deterioration, etc.";

_records.push(obj);
obj = {};
obj.id = 31;
obj.chapter = 2;
obj.weight = 5;
obj.title = "  Rules for identification of complete and partial (removal and return to warehouse) batches (lots) adhered to:  FIFO, lot control, expiration dates,...? ";

_records.push(obj);
obj = {};
obj.id = 32;
obj.chapter = 2;
obj.weight = 10;
obj.title = "  Procedures for controlling the movements of modified or revised products… versions, identification, management of unusable products, end of production, build-out?  ";
obj.note = "©: Revision level included.";

_records.push(obj);
obj = {};
obj.id = 33;
obj.chapter = 2;
obj.weight = 10;
obj.title = "  Is there a procedure for non-conformity management? ";
obj.note = "©:  Logistical and / or technical non-conformances. Formal area for non-conforming product with controlled access, identification, isolation, waivers, rejection, quarantine, returns, etc.";

_records.push(obj);
obj = {};
obj.id = 34;
obj.chapter = 2;
obj.weight = 10;
obj.title = "  Is there a procedure for managing corrective actions? ";
obj.note = "©: Recording and analysis of defects, action plans.";

_records.push(obj);
obj = {};
obj.id = 35;
obj.chapter = 2;
obj.weight = 5;
obj.title = "  Do all documents and packages carry the necessary Safety and Regulatory symbols? ";


_records.push(obj);
obj = {};
obj.id = 36;
obj.chapter = 2;
obj.weight = 5;
obj.title = "  Specifications clearly defined in the purchase order?";
obj.note = "©: Revision level";

_records.push(obj);
obj = {};
obj.id = 37;
obj.chapter = 2;
obj.weight = 10;
obj.title = "  Traceability of R/S and critical characteristics?  ";

_records.push(obj);
obj = {};
obj.id = 38;
obj.chapter = 2;
obj.weight = 5;
obj.title = " Inspection report on delivery? ";

_records.push(obj);
obj = {};
obj.id = 39;
obj.chapter = 2;
obj.weight = 5;
obj.title = "  Surveillance (Control) plan validated? ";
obj.note = "©: Surveillance plan covers process from receiving & incoming inspection through manufacturing and until shipping. It must also describe continuous conformance tests (product audits) with description and frequency of tests and measurements to be performed.";

_records.push(obj);
obj = {};
obj.id = 40;
obj.chapter = 2;
obj.weight = 5;
obj.title = "  Process audited and qualified? ";

_records.push(obj);
obj = {};
obj.id = 41;
obj.chapter = 2;
obj.weight = 10;
obj.title = "  Initial samples accepted?  ";


//Chapter 3

_records.push(obj);
obj = {};
obj.id = 42;
obj.chapter = 3;
obj.weight = 5;
obj.title = "  At each workstation and consistent with the surveillance (control) plan?";
obj.note = "©: Procedures and work instructions listed in plan.";

_records.push(obj);
obj = {};
obj.id = 43;
obj.chapter = 3;
obj.weight = 5;
obj.title = "  Up to date?";

_records.push(obj);
obj = {};
obj.id = 44;
obj.chapter = 3;
obj.weight = 10;
obj.title = "  Applied?  ";
obj.note = "©: Traceability documentation (through each stage of the process), work instructions and procedures: manufacturing processes, inspections, first and second level maintenance, safety, adjustment, reference changeovers, record (manufacture and inspection), identification of Regulatory and Safety characteristics, etc...";

_records.push(obj);
obj = {};
obj.id = 45;
obj.chapter = 3;
obj.weight = 5;
obj.title = "  Loading and unloading at workstations?";
obj.note = "©: Appropriate handling, FIFO at the workstation and intermediate storage.";

_records.push(obj);
obj = {};
obj.id = 46;
obj.chapter = 3;
obj.weight = 5;
obj.title = " Identification and traceability of work in progress during production? ";
obj.note = "©: Identification: Part number, revision number, marking, visibility, legibility,  etc...  &Traceability: Existence of a link between the source and destination of the product.";

_records.push(obj);
obj = {};
obj.id = 47;
obj.chapter = 3;
obj.weight = 5;
obj.title = "  No risk of damage at the workstations and during transfers?";
obj.note = "©: Packaging, handling equipment, intermediate storage areas, etc... Transfer between lines are clearly defined and respected.";

_records.push(obj);
obj = {};
obj.id = 48;
obj.chapter = 3;
obj.weight = 5;
obj.title = "  Production planning in conformance with Valeo requirements in terms of delivery (Kanban, DDR, etc.)? Identification of urgent batches? ";

_records.push(obj);
obj = {};
obj.id = 49;
obj.chapter = 3;
obj.weight = 10;
obj.title = "  Is there a procedure for authorizing the start of production?  ";
obj.note = "©: Procedure applied at start-up, elimination of parts used to set-up and tune equipment. Presence and conformance of production start-up parts. Start of production:  Long shutdowns, team changeover, material lot changeover, reference changeover, etc…";

_records.push(obj);
obj = {};
obj.id = 50;
obj.chapter = 3;
obj.weight = 10;
obj.title = "  Parameters affecting the process (external or internal)?  (10 权重)";
obj.note = "©: Identified, specified, under control, recorded, etc.  Controlled access to machine settings (e.g. Temperature, air pressure, voltage cleanliness, etc.).";

_records.push(obj);
obj = {};
obj.id = 51;
obj.chapter = 3;
obj.weight = 5;
obj.title = "  Traceability through product markings?";
obj.note = "©: Inspection stamp, date of manufacture, mold number, etc.";

_records.push(obj);
obj = {};
obj.id = 52;
obj.chapter = 3;
obj.weight = 10;
obj.title = "  Verification of process FMEA?  ";
obj.note = "©: Corrective actions implemented for critical RPN, list of product / process parameters checked at the workstation, updated (modifications, incidents, revisions, etc.)";

_records.push(obj);
obj = {};
obj.id = 53;
obj.chapter = 3;
obj.weight = 5;
obj.title = "  Verification of process parameters? ";
obj.note = "©:  Critical process parameters must be clearly identified with tolerances. Each parameter modification is registered with complete traceability: date, value and reason for change.";

_records.push(obj);
obj = {};
obj.id = 54;
obj.chapter = 3;
obj.weight = 10;
obj.title = "  Measurement and Inspection equipment?  ";
obj.note = "©: Inspection equipment, calibration and master parts:  recorded, operational, maintained, calibrated, R/R test, etc.";

_records.push(obj);
obj = {};
obj.id = 55;
obj.chapter = 3;
obj.weight = 5;
obj.title = "  Control of incidents occurring during production? ";
obj.note = "©: E.g. of production incidents: energy supply failures (electricity, water, air pressure…), shortages of parts, materials or consumables, tool equipment failures… obj.note = "


_records.push(obj);
obj = {};
obj.id = 56;
obj.chapter = 3;
obj.weight = 5;
obj.title = "  Management of downgraded processes? ";
obj.note = "©: Capacities, capabilities, balanced cycles, productivity, etc.";

_records.push(obj);
obj = {};
obj.id = 57;
obj.chapter = 3;
obj.weight = 10;
obj.title = "  Anti-error (Poka-Yoke) systems?  ";
obj.note = "©: Planned, completed, operational during the audit, check that they are in place and effective.";

_records.push(obj);
obj = {};
obj.id = 58;
obj.chapter = 3;
obj.weight = 5;
obj.title = "  Process audits? ";
obj.note = "©: Question applicable to process audit(s) on the supplier's process performed by the supplier.";

_records.push(obj);
obj = {};
obj.id = 59;
obj.chapter = 3;
obj.weight = 10;
obj.title = "  Special processes?  ";
obj.note = "©: Continuous monitoring of the process parameters, recording, guarantee that the operation has been completed.";


_records.push(obj);
obj = {};
obj.id = 60;
obj.chapter = 3;
obj.weight = 10;
obj.title = "  Identification of quality status: AWAITING DECISION, ACCEPTED, REJECTED, ACCEPTED UNDER WAIVER, REWORKED, etc.?  ";

_records.push(obj);
obj = {};
obj.id = 61;
obj.chapter = 3;
obj.weight = 10;
obj.title = "  Correct application of inspections based on (SPC) and management of deviations with corrective actions? SPC rules applied correctly? ";
obj.note = "©: Management of process variability and process capabilities.";

_records.push(obj);
obj = {};
obj.id = 62;
obj.chapter = 3;
obj.weight = 5;
obj.title = "  Recording of inspections, other than SPC, in accordance with instructions?";

_records.push(obj);
obj = {};
obj.id = 63;
obj.chapter = 3;
obj.weight = 10;
obj.title = "  Final validation of the product before transfer to another location, sub-contracting, or  release for external operations?  ";

_records.push(obj);
obj = {};
obj.id = 64;
obj.chapter = 3;
obj.weight = 5;
obj.title = "  Product audits? ";
obj.note = "©: Planned, completed, results systematically in use. Actual production compared to I.SS results to be performed on regular basis (min. once / year)";

_records.push(obj);
obj = {};
obj.id = 65;
obj.chapter = 3;
obj.weight = 5;
obj.title = "  First level maintenance (performed by operators)? ";
obj.note = "©: Instructions check lists, records of completion, verification of proper operation of the anti-error systems, measurement equipment, etc.";

_records.push(obj);
obj = {};
obj.id = 66;
obj.chapter = 3;
obj.weight = 10;
obj.title = " Second level maintenance (performed by Maintenance Department)? ";
obj.note = "©: Instructions,  check lists, scheduling, recording, equipment life-cycle sheets, existence and management of spare parts, measurement equipment, etc.";

_records.push(obj);
obj = {};
obj.id = 67;
obj.chapter = 3;
obj.weight = 5;
obj.title = "  Identification and validation? ";
obj.note = "©: Tooling conformance report, spare parts list, tooling service sheet, modifications, Valeo or customer ownership plate, etc.";

_records.push(obj);
obj = {};
obj.id = 68;
obj.chapter = 3;
obj.weight = 10;
obj.title = "  Maintenance of tooling sufficient to guarantee product quality?  ";
obj.note = "©: Preparation, verification, repair, recording….";


_records.push(obj);
obj = {};
obj.id = 69;
obj.chapter = 3;
obj.weight = 10;
obj.title = "  Is there a procedure for managing non-conformances? ";
obj.note = "©: Identification, isolation at the workstation, recording (quantity / defect), waivers, rejections, quarantine, returns, etc.";

_records.push(obj);
obj = {};
obj.id = 70;
obj.chapter = 3;
obj.weight = 10;
obj.title = "  Is there a procedure for managing corrective and preventive actions and using the results? ";
obj.note = "©: Effectiveness of corrective and preventive actions (non recurrence).";

_records.push(obj);
obj = {};
obj.id = 71;
obj.chapter = 3;
obj.weight = 5;
obj.title = "  Is there a procedure for managing modifications and changes? ";

_records.push(obj);
obj = {};
obj.id = 72;
obj.chapter = 3;
obj.weight = 10;
obj.title = "  Internal and external validation by ISs?  ";
obj.note = "©: ISs approved before modifications and changes are applied, information to customers, documentation updated (revision numbers) etc.";


//Chapter 4

_records.push(obj);
obj = {};
obj.id = 73;
obj.chapter = 4;
obj.weight = 5;
obj.title = "  Use of instruction sheets for packaging?";
obj.note = "©: In accordance with customer requirements (Packaging Diagram), risk analysis.";

_records.push(obj);
obj = {};
obj.id = 74;
obj.chapter = 4;
obj.weight = 5;
obj.title = "  In accordance with customer requirements?";
obj.note = "©: Galia / Odette / AIAG labels, Safety and Regulatory symbols";

_records.push(obj);
obj = {};
obj.id = 75;
obj.chapter = 4;
obj.weight = 5;
obj.title = "  Anti-error systems to prevent product mixing and incorrect identification? ";

_records.push(obj);
obj = {};
obj.id = 76;
obj.chapter = 4;
obj.weight = 5;
obj.title = "  Identification of approved deviations and modifications?";

_records.push(obj);
obj = {};
obj.id = 77;
obj.chapter = 4;
obj.weight = 10;
obj.title = "  Suitable and formally identified storage areas? ";
obj.note = "©: Conditions and quality of storage, adequate space, identification, revision numbers, FIFO, expiry dates, audits, etc.";

_records.push(obj);
obj = {};
obj.id = 78;
obj.chapter = 4;
obj.weight = 5;
obj.title = "  Maintenance of storage, handling, weighing, counting, and packaging equipment?";
obj.note = "©: Revision level included.";

_records.push(obj);
obj = {};
obj.id = 79;
obj.chapter = 4;
obj.weight = 10;
obj.title = "  Management of off-site or back-up storage areas?  ";
obj.note = "©: Defined responsibilities, conditions and quality of storage, FIFO, audits, etc.";

_records.push(obj);
obj = {};
obj.id = 80;
obj.chapter = 4;
obj.weight = 5;
obj.title = "  Handling equipment and methods suitable for the product and the safety of personnel? ";
obj.note = "©: Including back-up equipment.";

_records.push(obj);
obj = {};
obj.id = 81;
obj.chapter = 4;
obj.weight = 10;
obj.title = "  Is there a shipping procedure? ";
obj.note = "©: Shipping instruction sheets, release of lots with inspection check-list, conformance of documents, anti-error systems.";

_records.push(obj);
obj = {};
obj.id = 82;
obj.chapter = 4;
obj.weight = 5;
obj.title = "  Clear responsibilities - personnel?";
obj.note = "©: Customer/ supplier, emergency contacts";

_records.push(obj);
obj = {};
obj.id = 83;
obj.chapter = 4;
obj.weight = 5;
obj.title = "  Defined shipping (preparation) area?";
obj.note = "©: If shipping area is close to goods inwards, analyze the risks of mixing products.";

_records.push(obj);
obj = {};
obj.id = 84;
obj.chapter = 4;
obj.weight = 5;
obj.title = "  Transport audit? ";
obj.note = "©: Consolidation area for each carrier, platform, instruction and check sheets, etc.";

_records.push(obj);
obj = {};
obj.id = 85;
obj.chapter = 4;
obj.weight = 5;
obj.title = "  Management of security (safety) stock?";
obj.note = "©: Risk analysis, safety stock plan, customer approval, revision numbers controlled?";

_records.push(obj);
obj = {};
obj.id = 86;
obj.chapter = 4;
obj.weight = 5;
obj.title = "  Conditions of use at the customer understood and taken into account?";

_records.push(obj);
obj = {};
obj.id = 87;
obj.chapter = 4;
obj.weight = 5;
obj.title = "  Is there a procedure for managing non-conformances?";
obj.note = "©: Includes management of logistics complaints.";


//Chapter 5

_records.push(obj);
obj = {};
obj.id = 88;
obj.chapter = 5;
obj.weight = 10;
obj.title = "  Appropriate organization and resources? ";
obj.note = "©: External assistance if necessary, approved / accredited source etc.";

_records.push(obj);
obj = {};
obj.id = 89;
obj.chapter = 5;
obj.weight = 5;
obj.title = "  Is there a test; and calibration procedure?";
obj.note = "©: Existence, suitability, and application";

_records.push(obj);
obj = {};
obj.id = 90;
obj.chapter = 5;
obj.weight = 5;
obj.title = "  Schedules?";
obj.note = "©: Existence, respected, and updated";

_records.push(obj);
obj = {};
obj.id = 91;
obj.chapter = 5;
obj.weight = 10;
obj.title = "  Results? ";
obj.note = "©: Recording, approval, distribution, archiving, conformance to specifications, implementation of corrective actions if non-conformance detected.";

_records.push(obj);
obj = {};
obj.id = 92;
obj.chapter = 5;
obj.weight = 10;
obj.title = "  Appropriate organization and resources? ";
obj.note = "©: External assistance if necessary, etc.";

_records.push(obj);
obj = {};
obj.id = 93;
obj.chapter = 5;
obj.weight = 5;
obj.title = "  Is there a test; and calibration procedure?";
obj.note = "©: Existence, suitability, and application";

_records.push(obj);
obj = {};
obj.id = 94;
obj.chapter = 5;
obj.weight = 5;
obj.title = "  Schedules?";
obj.note = "©: Existence, application, and updating";

_records.push(obj);
obj = {};
obj.id = 95;
obj.chapter = 5;
obj.weight = 10;
obj.title = "  Results?  ";
obj.note = "©: Recording, approval, distribution, archiving, conformance to specifications and implementation of corrective actions if non-conformance is detected.";


//Chapter 6

_records.push(obj);
obj = {};
obj.id = 96;
obj.chapter = 6;
obj.weight = 10;
obj.title = "  Personnel trained and authorized to perform the tasks required.  Work instructions and procedures understood and respected? ";
obj.note = "©: e.g. Authorized fork-lift driver, quality control, special resources. Each operator (in all teams) is trained to: safety on workstations, all standard operating modes of workstations (start up, production, quality, 1st level maintenance, supply, first defect stop guidelines, R/S - critical & subjective characteristics). There is a regular requalification of operators for subjective characteristics.";

_records.push(obj);
obj = {};
obj.id = 97;
obj.chapter = 6;
obj.weight = 5;
obj.title = "  Flexibility and multi-competence skills measured and monitored?";
obj.note = "©: e.g. Cross-training matrix";

_records.push(obj);
obj = {};
obj.id = 98;
obj.chapter = 6;
obj.weight = 5;
obj.title = "  Organized workflow?";
obj.note = "©: Ergonomic workstations, logical flow of work between workstations.";

_records.push(obj);
obj = {};
obj.id = 99;
obj.chapter = 6;
obj.weight = 5;
obj.title = "  General Environment: Order, cleanliness, lighting, atmosphere, noise?";
obj.note = "©: Floor marking, measured criteria fro cleanliness, results displayed. If noise is level is not conform to national regulation or Valeo rule, actions to recover must be implemented and followed up.";

_records.push(obj);
obj = {};
obj.id = 100;
obj.chapter = 6;
obj.weight = 5;
obj.title = "  Waste management is under control and conform to ISO 14001?";
obj.note = "©: Rules for management and storage of dangerous products defined and respected Selective sorting of waste, appropriate management of special waste, Periodical analysis of industrial rejects (smoke, water)";

_records.push(obj);
obj = {};
obj.id = 101;
obj.chapter = 6;
obj.weight = 5;
obj.title = "  Safety rules displayed at the workstations and adhered to?";
obj.note = "©: External assistance if necessary, approved / accredited source etc.";

_records.push(obj);
obj = {};
obj.id = 102;
obj.chapter = 6;
obj.weight = 5;
obj.title = "  Adequate and clear displays? ";
obj.note = "©: Daily and monthly data, up to date, and understood by personnel.";


//Chapter 7

_records.push(obj);
obj = {};
obj.id = 103;
obj.chapter = 7;
obj.weight = 5;
obj.title = "  In incoming, warehouses and on the production lines concerned by this process audit, are indicators available to verify that objectives are met and to monitor improvement?";
obj.note = "©: e.g. Quality, Cost, Delivery indicators";


//Chapter 8

_records.push(obj);
obj = {};
obj.id = 104;
obj.chapter = 8;
obj.weight = 10;
obj.title = "  Inform CCL or KPCL applicable in SUMMARY SHEET if necessary.  ";
obj.note = "©: The CCL shall conform to our expectations:CCL < 80% ===> Conformance 1080% < CCL < 90% ===> Conformance 490% < CCL < 100% ===> Conformance 0Not applicable ===> Conformance 0";


_records.push(obj);
obj = {};
obj.id = 105;
obj.chapter = 8;
obj.weight = 10;
obj.title = "  Inform CCL or KPCL applicable in SUMMARY SHEET if necessary.  ";
obj.note = "©: The CCL shall conform to our expectations:CCL < 80% ===> Conformance 1080% < CCL < 90% ===> Conformance 490% < CCL < 100% ===> Conformance 0Not applicable ===> Conformance 0";

_records.push(obj);
obj = {};
obj.id = 106;
obj.chapter = 8;
obj.weight = 10;
obj.title = "  Inform CCL or KPCL applicable in SUMMARY SHEET if necessary.  ";
obj.note = "©: The CCL shall conform to our expectations:CCL < 80% ===> Conformance 1080% < CCL < 90% ===> Conformance 490% < CCL < 100% ===> Conformance 0Not applicable ===> Conformance 0";

_records.push(obj);
obj = {};
obj.id = 107;
obj.chapter = 8;
obj.weight = 10;
obj.title = "  Inform CCL or KPCL applicable in SUMMARY SHEET if necessary.  ";
obj.note = "©: The CCL shall conform to our expectations:CCL < 80% ===> Conformance 1080% < CCL < 90% ===> Conformance 490% < CCL < 100% ===> Conformance 0Not applicable ===> Conformance 0";

_records.push(obj);
obj = {};
obj.id = 108;
obj.chapter = 8;
obj.weight = 10;
obj.title = "  Inform CCL or KPCL applicable in SUMMARY SHEET if necessary.  ";
obj.note = "©: The CCL shall conform to our expectations:CCL < 80% ===> Conformance 1080% < CCL < 90% ===> Conformance 490% < CCL < 100% ===> Conformance 0Not applicable ===> Conformance 0";



