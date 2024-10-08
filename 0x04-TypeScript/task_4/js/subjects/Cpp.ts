// cpp
namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }
  // extending subject
  export class Cpp extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    getAvailableTeacher(): string {
      if (this._teacher && this._teacher.experienceTeachingC !== undefined) {
        return `Available Teacher: ${this._teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }
}
