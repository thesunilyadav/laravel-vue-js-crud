<template>
    <!-- <div class="container"> -->
    <!-- <div class="row"> -->
        <div class="col-md-offset-1 col-md-12" style="margin-top:15px">
            <div class="panel">
                <div class="panel-heading">
                    <div class="row">
                        <div class="col col-sm-3 col-xs-12">
                            <h4 class="title">Students</h4>
                        </div>
                        <div class="col-sm-9 col-xs-12 text-right">
                            <button @click="showForm" class="btn btn-default std-add" title="Add Student"><i class="fa fa-plus-circle"></i></button>
                        </div>
                    </div>
                </div>
                <div class="panel-body table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Class</th>
                                <th>Email </th>
                                <th>DOB</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Vincent Williamson</td>
                                <td>31</td>
                                <td>iOS Developer</td>
                                <td>Sinaai-Waas</td>
                                <td>
                                    <ul class="action-list">
                                        <li><a href="#" data-tip="edit"><i class="fa fa-edit"></i></a></li>
                                        <li><a href="#" data-tip="delete"><i class="fa fa-trash"></i></a></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Taylor Reyes</td>
                                <td>22</td>
                                <td>UI/UX Developer</td>
                                <td>Baileux</td>
                                <td>
                                    <ul class="action-list">
                                        <li><a href="#" data-tip="edit"><i class="fa fa-edit"></i></a></li>
                                        <li><a href="#" data-tip="delete"><i class="fa fa-trash"></i></a></li>
                                    </ul>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    <!-- </div>
</div> -->
</template>
<script setup>
    // import { store } from "../../store/store"
    import { useRouter } from "vue-router";

    const router = useRouter();

    function showForm(){
        router.push({name:'AddStudent'});
    }
    console.log("Home");
    // console.log("Store",store);
</script>
