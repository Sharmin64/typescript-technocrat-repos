var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
{
    // Fuction Generic
    var createArray = function (param) {
        return [param];
    };
    var createArrayWithGeneric = function (param) {
        return [param];
    };
    var res2 = createArrayWithGeneric('Europ Continent');
    console.log(res2);
    var res1 = createArray('Asia Continent');
    var resGenericObj = createArrayWithGeneric({ id: 79485, name: 'Mis Hatun' });
    console.log(res1);
    // Generic function with tuple
    var createArrayWithTuple = function (param1, param2) {
        return [param1, param2];
    };
    // const createArrayWith = <T>(param:T) :T[]=>{
    //     return [param]
    // }
    var res22 = createArrayWithTuple('Europ Continent', {
        name: 'London'
    });
    // console.log(res2);
    var res11 = createArrayWithTuple('Asia Continent', 60);
    var addCourseToStudent = function (student) {
        var courseName = 'Next Level Web Development';
        return __assign(__assign({}, student), { courseName: courseName });
    };
    var student1 = addCourseToStudent({ name: 'Mis Laltu', email: 'laltu@gmail.com', devType: 'NLWD' });
    var student2 = addCourseToStudent({ name: 'Mr.paltu', email: 'paltu@gmail.com', hasWatch: 'Vanga Ghori' });
    var addTaskHomeWork = function (task) {
        var taskName = ' building block';
        return __assign(__assign({}, task), { taskName: taskName });
        console.log(__assign({}, task));
    };
    var taskOne = addTaskHomeWork({ name: 'ghorbari mosa', detail: 'ghor jharu diye taerpor mosba', hasVacation: true });
    var taskTwo = addTaskHomeWork({ name: 'ranna kora ar bagan poriskar kora ', salary: 5000, isLeave: false });
    // 
}
