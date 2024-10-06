public with sharing class ContactManager {
  @AuraEnabled(cacheable=true)
  public static List<Contact> getContact() {
    return [
      SELECT Id, FirstName, LastName, Phone
      FROM Contact
      WITH SECURITY_ENFORCED
      LIMIT 20
    ];
  }

  @AuraEnabled(cacheable=true)
  public static List<Contact> getContactWithParm(Integer numberOfRecords) {
    return [
      SELECT Id, FirstName, LastName, Phone
      FROM Contact
      WITH SECURITY_ENFORCED
      LIMIT :numberOfRecords
    ];
  }
}
