import { Component, OnInit } from '@angular/core'
import { EmployeeService } from '../services/employee.service';
import { NgForm } from '@angular/forms'



@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    providers: [EmployeeService]
})

export class EmployeeComponent implements OnInit {
    public Employee: any;
    public empArray: any[] = [];
    private isUpdate: boolean | undefined
    constructor(
        public employeeService: EmployeeService
    ) { }

    ngOnInit(): void {
        this.resetForm();
        this.employeeService.getAsync().subscribe((res) => {
            console.log(res);
            if (res) this.empArray = res;

        });
    }

    public onSubmit(form: NgForm) {
        if (!this.isUpdate) {
            this.employeeService.postAsync(form.value).subscribe(res => {
                console.log(res);
            });
        } else {
            console.log(form.value);

            this.employeeService.putAsync(form.value._id, form.value).subscribe((res) => {
                console.log(res);
            });
        }
    }

    public resetForm(f?: NgForm): void {
        console.log(f)
        this.Employee = {
            _id: '',
            name: '',
            position: '',
            office: '',
            salary: null
        };
    }
    public onEdit(id: string) {
        this.isUpdate = true;
        this.employeeService.getByIdAsync(id).subscribe((res) => {
            this.Employee = {
                _id: res._id,
                name: res.name,
                position: res.position,
                office: res.office,
                salary: res.salary
            };
        });
    }
    public deleteEmp(id: string) {
        this.employeeService.deleteAsync(id).subscribe((res) => {
            console.log(res);
        })
    }
}