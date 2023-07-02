from rest_framework.routers import DefaultRouter
from .views import LeadViewset

router = DefaultRouter()
router.register("leads", LeadViewset, "leads")

urlpatterns = router.urls
