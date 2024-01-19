import{_ as i,b as d,d as e,e as s,f as l,F as c,h as o,r as n,o as r,j as a}from"./index-KR5uN9_n.js";const b={},v={class:"container"},p={class:"list-unstyled d-flex page-box mb-4"},m={class:"page-item"},u={class:"page-item"},f=o('<section class="bg-white-box mb-2"><form class="d-flex justify-content-between align-items-end"><div class="d-flex gap-2"><div class=""><label for="exampleFormControlInput1" class="form-label">裝置ID、裝置名稱</label><input type="text" class="form-control" id="exampleFormControlInput1" placeholder="請輸入ID、名稱"></div><div class=""><label for="country" class="form-label">裝置類型</label><select class="form-select" id="country" required=""><option value="">請選擇裝置類型</option><option>United States</option></select><div class="invalid-feedback">Please select a valid country.</div></div><div class=""><label for="country2" class="form-label">啟用狀態</label><select class="form-select" id="country2" required=""><option value="">請選擇啟用狀態</option><option>United States</option></select><div class="invalid-feedback">Please select a valid country.</div></div><div class=""><label for="country2" class="form-label">連線狀態</label><select class="form-select" id="country2" required=""><option value="">請選擇連線狀態</option><option>United States</option></select><div class="invalid-feedback">Please select a valid country.</div></div></div><div class="d-flex gap-2"><button type="submit" class="btn btn-outline-gray fw-semibold"> 清除 </button><button type="submit" class="btn btn-gray fw-semibold text-white"> 搜尋 </button></div></form></section><section><div class="d-flex justify-content-between align-items-end mb-2"><h4 class="fw-semibold">列表</h4><div class="d-flex gap-2 align-items-center me-2"><p class="mb-0 me-2">共計：12 筆</p><button class="btn btn-outline-primary fw-semibold" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"> 新增裝置 </button></div></div><div class="bg-white-box"><div class="table-responsive"><table class="table table-hover"><thead class="table-head"><tr><th scope="col">排序</th><th class="table-img-col" scope="col"><p class="border-start border-2 ps-2 mb-0">裝置ID</p></th><th scope="col">裝置名稱</th><th scope="col">裝置類型</th><th scope="col">連線ID</th><th scope="col">站號</th><th scope="col">啟用狀態</th><th scope="col">連線狀態</th><th scope="col"><p class="border-start border-2 ps-2 mb-0">操作</p></th></tr></thead><tbody><tr><th scope="row" class="text-center">1</th><td>DI_7_12</td><td>玖鼎電表-A相電流</td><td>GeneralModbusDevice</td><td>Conn23</td><td>1</td><td><select class="form-select" id="country" required=""><option value="">啟用中</option><option>停用中</option></select></td><td>連線中</td><td><div class="ps-2"><button type="button" class="btn btn-outline-primary border-0 fw-semibold"> 編輯 </button><button type="button" class="btn btn-outline-danger border-0 fw-semibold"> 刪除 </button></div></td></tr></tbody></table></div></div></section>',2),h=o('<div class="offcanvas offcanvas-end account-offcanvas" tabindex="-1" data-bs-backdrop="staticSS" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel"><div class="offcanvas-header justify-content-end"><button type="button" class="btn-close rounded-5 bg-gray" data-bs-dismiss="offcanvas" aria-label="Close"></button></div><div class="title-word mt-1"><span class="colr-block"></span><h2 class="mb-0 fw-semibold">建立新帳號</h2></div><div class="offcanvas-body"><form class="needs-validation" novalidate=""><div class="row g-3"><div class="col-8"><label for="account" class="form-label">帳號：</label><input type="text" class="form-control" id="account" value="" required="" placeholder="請輸入帳號"><div class="invalid-feedback">Account is required.</div></div><div class="col-8"><label for="name" class="form-label">姓名：</label><input type="text" class="form-control" id="name" placeholder="請輸入姓名"><div class="invalid-feedback">Name is required.</div></div><div class="col-8"><label for="tel" class="form-label">電話：</label><input type="tel" class="form-control" id="tel" placeholder="請輸入電話"><div class="invalid-feedback"> Please enter a valid email address for shipping updates. </div></div><div class="col-12 d-flex align-items-end gap-2"><div class="col-8"><label for="department" class="form-label">單位：</label><select class="form-select" id="department" required=""><option value="">請選擇單位</option><option>United States</option></select><div class="invalid-feedback"> Please select a valid department. </div></div><div class="col-4"><button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"> 建立新單位 </button></div></div><div class="col-12 d-flex align-items-end gap-2"><div class="col-8"><label for="title" class="form-label">職稱：</label><select class="form-select" id="title" required=""><option value="">請選擇職稱</option><option>United States</option></select><div class="invalid-feedback">Please select a valid title.</div></div><div class="col-4"><button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"> 建立新職稱 </button></div></div><div class="col-8"><label for="system-access" class="form-label">系統權限：</label><select class="form-select" id="system-access" required=""><option value="">請選擇權限</option><option>United States</option></select><div class="invalid-feedback">Please select a valid country.</div></div></div><hr class="my-4"><h3>頁面權限</h3><div class="col-12 d-flex align-items-end gap-2"><div class="col-8"><select class="form-select" id="country" required=""><option value="">Choose...</option><option>United States</option></select><div class="invalid-feedback">Please select a valid country.</div></div><div class="col-4"><select class="form-select" id="country" required=""><option value="">Choose...</option><option>United States</option></select></div></div><div class="col-4"><button type="button" class="btn btn-outline-gray">新增頁面</button></div><div class="mt-5 text-center"><button class="btn btn-primary w-50" type="submit">下一步</button></div></form></div></div><div class="modal fade" id="exampleModal" data-bs-backdrop="static" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog modal-dialog-centered"><div class="modal-content bg-white-box"><div class="modal-header border-0"><div class="title-word"><span class="colr-block"></span><h2 class="mb-0 fw-semibold">建立新單位</h2></div><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"><div class="mb-3"><label for="inputField" class="form-label">單位名稱：</label><input type="text" class="form-control" id="inputField" placeholder="請輸入單位名稱"></div><div class="text-center"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal"> 儲存 </button></div></div></div></div></div>',2);function y(g,x){const t=n("router-link");return r(),d(c,null,[e("div",v,[e("ul",p,[e("li",m,[s(t,{to:"/devices/devicesManger",class:"page-link fs-4"},{default:l(()=>[a("裝置列表")]),_:1})]),e("li",u,[s(t,{to:"/devices/locationManger",class:"page-link fs-4"},{default:l(()=>[a("點位列表")]),_:1})])]),f]),h],64)}const w=i(b,[["render",y]]);export{w as default};
